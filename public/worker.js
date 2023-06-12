// ******************************************************************************************************
// this.addEventListener("push", function (e) {
//   const data = e.data.json();
//   this.registration.showNotification(data.title, {
//     body: data.body,
//   });
// });

// ******************************************************************************************************
this.addEventListener("push", function (e) {
  console.log(e.body);
  const data = e.data.json();
  console.log(JSON.stringify(e.data));
  const options = {
    body: data.body,
    // image:
    //   "https://upload.wikimedia.org/wikipedia/commons/e/e9/Alexandrine_parakeet_%28Psittacula_eupatria_eupatria%29_male.jpg",
    badge: "./zlite_logo.png", // icon
    icon: "./zlite_logo.png", // icon
  };
  console.log({ options });
  this.registration.showNotification("Zlite", options);
});

// ******************************************************************************************************
// this.addEventListener("push", function (e) {
//   console.log(e.body);
//   const data = e.data.json();
//   console.log(JSON.stringify(e.data));
//   const options = {
//     body: data.body,
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/e/e9/Alexandrine_parakeet_%28Psittacula_eupatria_eupatria%29_male.jpg",
//     badge: "./zlite_logo.png", // icon
//     icon: "./zlite_logo.png", // icon
//   };
//   console.log({ options });
//   this.registration.showNotification("Zefayar", options);
// });

// ****************************************************************************************************

// this.addEventListener("push", function (e) {
//   const data = e.data.json();
//   const options = {
//     body: data.body,
//     actions: [
//       {
//         action: "coffee-action",
//         type: "button",
//         title: "View Cart",
//         icon: "./zlite_logo.png",
//       },
//     ],
//   };
//   console.log({ options });
//   this.registration.showNotification("Zefayar", options);
// });

// ****************************************************************************************************

// this.addEventListener("push", function (e) {
//   const data = e.data.json();
//   const options = {
//     body: data.body,
//     actions: [
//       {
//         action: "reply",
//         type: "text",
//         title: "Reply",
//         placeholder: "Type text here",
//       },
//     ],
//   };
//   console.log({ options });
//   this.registration.showNotification("Zefayar", options);
// });

// ****************************************************************************************************

// this.addEventListener("push", function (e) {
//   const data = e.data.json();
//   const options = {
//     body: data.body,
//     actions: [
//       {
//         action: "yes",
//         type: "button",
//         title: "👍 Yes",
//       },
//       {
//         action: "no",
//         type: "text",
//         title: "👎 No (explain why)",
//         placeholder: "Type your explanation here",
//       },
//     ],
//   };
//   console.log({ options });
//   this.registration.showNotification("Zefayar", options);
// });

// ****************************************************************************************************

// this.addEventListener("push", function (e) {
//   const data = e.data.json();
//   const options = {
//     body: data.body,
//     vibrate: [
//       500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170,
//       40, 500,
//     ],
//   };
//   console.log({ options });
//   this.registration.showNotification("Zefayar", options);
// });

// ****************************************************************************************************

// this.addEventListener("push", function (e) {
//   const data = e.data.json();
//   const options = {
//     body: data.body,
//     sound: "./apple.mp3",
//   };
//   console.log({ options });
//   this.registration.showNotification("Zefayar", options);
// });

// ****************************************************************************************************

// this.addEventListener("push", function (e) {
//   const data = e.data.json();
//   const options = {
//     body: 'Timestamp is set to "01 Jan 2000 00:00:00".',
//     timestamp: Date.parse("01 Jan 2000 00:00:00"),
//   };
//   console.log({ options });
//   this.registration.showNotification("Zefayar", options);
// });

// ****************************************************************************************************
