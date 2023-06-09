export default {
  function() {
    var count = 1;
    var API_HOST = "http://open.iot.10086.cn";
    function noop() {}
    function jsonp(url, opts, fn) {
      if ("function" == typeof opts) {
        fn = opts;
        opts = {};
      }
      if (!opts) {
        opts = {};
      }
      var prefix = opts.prefix || "callback";
      var id = opts.name || prefix + count++;
      var param = opts.param || "callback";
      var timeout = null != opts.timeout ? opts.timeout : 60000;
      var enc = encodeURIComponent;
      var target = document.getElementsByTagName("script")[0] || document.head;
      var script;
      var timer;
      if (timeout) {
        timer = setTimeout(function () {
          cleanup();
          if (fn) {
            fn(new Error("Timeout"));
          }
        }, timeout);
      }
      function cleanup() {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
        window[id] = noop;
        if (timer) {
          clearTimeout(timer);
        }
      }
      function cancel() {
        if (window[id]) {
          cleanup();
        }
      }
      window[id] = function (data) {
        cleanup();
        if (fn) {
          fn(null, data);
        }
      };
      url +=
        (~url.indexOf("?") ? "&" : "?") +
        param +
        "=" +
        enc(id) +
        "&_=" +
        new Date().getTime();
      url = url.replace("?&", "?");
      script = document.createElement("script");
      script.src = url;
      target.parentNode.insertBefore(script, target);
      return cancel;
    }
    function OneNetApi(apiKey) {
      if (!apiKey) {
        alert("初始化OneNetApi时必须传入apiKey！");
      }
      this._apiKey = encodeURIComponent(apiKey);
    }
    OneNetApi.prototype = {
      getDataStreams: function (deviceId) {
        var doneCallBack;
        jsonp(
          API_HOST +
            "/api/jsonpresend?key=" +
            this._apiKey +
            "&method=GET&uri=devices/" +
            deviceId +
            "/datastreams",
          function (error, res) {
            if (error || !res.hasOwnProperty("data")) {
              res = {
                errno: 100,
                error: "timeout",
              };
            }
            doneCallBack && doneCallBack(res);
          }
        );
        return {
          done: function (func) {
            doneCallBack = func;
          },
        };
      },
      getDataPoints: function (deviceId, parameter) {
        var doneCallBack;
        var uri = "devices/" + deviceId + "/datapoints";
        var uriComponent = "";
        if (parameter) {
          for (var i in parameter) {
            if (uriComponent) {
              uriComponent += encodeURIComponent("&");
            }
            uriComponent += i + "=" + encodeURIComponent(parameter[i]);
          }
          uri += encodeURIComponent("?") + uriComponent;
        }
        jsonp(
          API_HOST +
            "/api/jsonpresend?key=" +
            this._apiKey +
            "&method=GET&uri=" +
            uri,
          function (error, res) {
            if (error || !res.hasOwnProperty("data")) {
              res = {
                errno: 100,
                error: "timeout",
              };
            }
            doneCallBack && doneCallBack(res);
          }
        );
        return {
          done: function (func) {
            doneCallBack = func;
          },
        };
      },
    };
    window.OneNetApi = OneNetApi;
  },
};
