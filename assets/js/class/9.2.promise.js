function proses1() {
    const success = true;
    return new Promise((resolve, reject) => {
      if (success) {
        setTimeout(() => {
          console.log("Proses 1 berhasil");
          resolve();
        }, 5000);
      } else {
        console.log("proses 1 gagal");
        reject();
      }
    });
  }
  
  function proses2() {
    const success = false;
    return new Promise((resolve, reject) => {
      if (success) {
        setTimeout(() => {
          console.log("Proses 2 berhasil");
          resolve();
        }, 2000);
      } else {
        console.log("proses 2 gagal");
        reject();
      }
    });
  }
  
  function proses3() {
    const success = true;
    return new Promise((resolve, reject) => {
      if (success) {
        setTimeout(() => {
          console.log("Proses 3 berhasil");
          resolve();
        }, 3000);
      } else {
        console.log("proses 3 gagal");
        reject();
      }
    });
  }
  
  function multipleProcess() {
    proses1()
      .then(() => proses2())
      .then(() => proses3())
      .catch(() => {
        console.log("ada proses yang gagal");
      });
  }
  
  multipleProcess();