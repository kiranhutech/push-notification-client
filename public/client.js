// const publicVapidKey =
//   "BCr2JJBJYivpM_QdUNd130Ox0XZVMmU4IJGoJIwcGAGgTALSW8N1qqJrrBll7CIwmSnqQ2BhKUicirigENn0ij0";

const publicVapidKey =
  "BEQJUTNXCKKzxs1eQbZeWKP4-gU8UsJAUSszog8zhsmg1gI0IqyKsWU2pb3yaHRuUZrvYmy3Qxcjt5wrU840Kno";

// async function registerServiceWorker() {
//   const register = await navigator.serviceWorker.register("./worker.js", {
//     scope: "/",
//   });

//   const subscription = await register.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerKey: publicVapidKey,
//   });

//   await fetch("http://localhost:3001/subscribe", {
//     method: "POST",
//     body: JSON.stringify(subscription),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// async function triggerPushNotification() {
//   this.registration.showNotification("Zefayar", {
//     body: "Hello",
//     image: "./zlite_logo.png",
//     badge: "./zlite_logo.png", // icon
//     icon: "./zlite_logo.png", // icon
//   });
//   await fetch("http://localhost:3001/push", {
//     method: "POST",
//     body: JSON.stringify({
//       payload: {
//         title: "ZLITE-PRIZE DROP",
//         body: "Pleas check your Zlite cart",
//         image: "./",
//         icon: "https://zefayar-uat.hutechweb.com/08a4491b2e23b6e7.png",
//       },
//       subscription: {
//         endpoint:
//           "https://fcm.googleapis.com/fcm/send/fGbV45fRB6M:APA91bFTJPVCjnZQu8e3_AajHzqA2wLOVZJofjqVNoucPuEhqW6LNFdLS48PKSD76khXGFfjTnAY9tIbyYpIzM62emmXlODpgBjZ9NBRhXEcuy1816ZYb5RrTtHOwO4l3BQLqAT06BSN",
//         expirationTime: null,
//         keys: {
//           p256dh:
//             "BDm_mcrgFJDugLdxcWSOdScX1lxMT3V5bxHtQjjaUOXS94ut9eHwQJjzx-IKCqidfNHntGacBOIeZipds3VZosY",
//           auth: "geu_sikM4-tjc-QB_gDHDQ",
//         },
//       },
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// ***********************************************************************************************************

async function registerServiceWorker() {
  const register = await navigator.serviceWorker.register("./worker.js", {
    scope: "/",
  });

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: publicVapidKey,
  });

  console.log(
    "222222222222",
    JSON.stringify({
      subscription: subscription,
      storeId: "fef10faa-f9bd-4e80-a06b-576a3b3891f2",
      userId: "fef10faa-f9bd-4e80-a06b-576a3b3891f2",
    })
  );

  await fetch("http://192.168.0.110:3334/store/api/v1/webpush/subscribe", {
    method: "POST",
    body: JSON.stringify({
      subscription: subscription,
      storeId: "fef10faa-f9bd-4e80-a06b-576a3b3891f2",
      userId: "fef10faa-f9bd-4e80-a06b-576a3b3891f2",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

registerServiceWorker();
