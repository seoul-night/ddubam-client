function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              console.log(
                "New content is available and will be used when all " +
                  "tabs for this page are closed. See https://cra.link/PWA."
              );

              // 사용자에게 새로운 콘텐츠가 이용 가능함을 알림
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }

              // 새로고침을 통해 새 콘텐츠를 적용
              window.location.reload();
            } else {
              console.log("Content is cached for offline use.");

              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
}
