<template>
  <div id="STRWrapper">
    <div class="white_flag"></div>
    <div class="blue_flag"></div>
    <div class="red_flag"></div>
  </div>
</template>

<style lang="scss">
// #STRWrapper {
//   position: fixed;
//   width: 100px;
//   height: 100px;
//   transform: rotate(45deg);
//   top: 0;
//   right: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   margin-top: -36px;

//   user-select: none;

//   .white_flag {
//     background-color: #ccc;

//     width: 1000%;
//     height: 33%;
//   }

//   .blue_flag {
//     background-color: #00c;

//     width: 1000%;
//     height: 33%;
//   }

//   .red_flag {
//     background-color: #c00;
//     width: 1000%;
//     height: 33%;
//     display: flex;
//     justify-content: center;
//     color: white;
//     font-size: 20px;
//     align-items: center;
//     padding-left: 50px;
//   }
// }

// .header {
//   padding-right: 30%;
// }

#STRWrapper {
  position: fixed;
  bottom: 90px;
  right: 20px;

  display: flex;
  flex-direction: column;

  width: 50px;
  height: 35px;

  .white_flag {
    background-color: #ccc;

    border-radius: 5px 5px 0 0;

    width: 100%;
    height: 33%;
  }

  .blue_flag {
    background-color: #00c;

    width: 100%;
    height: 33%;
  }

  .red_flag {
    background-color: #c00;
    width: 100%;
    height: 33%;

    border-radius: 0 0 5px 5px;
  }
}
</style>
