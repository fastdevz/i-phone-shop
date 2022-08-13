/* HAMBORGA NAVIGATION*/
const ham = document.getElementById('hamborgerIcon');
const nav = document.querySelector('.navigation');
const hamClose = document.querySelector('.hamClose');
ham.addEventListener('click',()=>{
nav.classList.add('navActive');
});

hamClose.addEventListener('click',()=>{
    nav.classList.remove('navActive');
    });
/*End of hamborger navigations*/
/* home pages click event for 3d display images */
 const iframeData = [
    {
        name:'Huawei Mate 30 Black 3D Model',
        tag:' <iframe width="745" height="480" src="https://360.hum3d.com/view/211995/" frameborder="0"></iframe>'
    },
    {
        name:'Huawei P20 Black 3D mode',
        tag:' <iframe width="745" height="480" src="https://360.hum3d.com/view/203639/" frameborder="0"></iframe>'
    },
    {
        name:'Apple iPhone 13 Pro Gold 3D model',
        tag:'<iframe width="745" height="480" src="https://360.hum3d.com/view/224126/" frameborder="0"></iframe>'
    },
    {
        name:'Appel Iphone 13 mini 3d model',
        tag:'<iframe width="745" height="480" src="https://360.hum3d.com/view/219302/" frameborder="0"></iframe>'
    },
    {
        name:'Huawei P20 Black 3D mode',
        tag:' <iframe width="745" height="480" src="https://360.hum3d.com/view/205909/" frameborder="0"></iframe>'
    },
    {
        name:'Apple iPhone 13 Pro Gold 3D model',
        tag:'<iframe width="745" height="480" src="https://360.hum3d.com/view/217242/" frameborder="0"></iframe>'
    },
    {
        name:'Appel Iphone 13 mini 3d model',
        tag:'<iframe width="745" height="480" src="https://360.hum3d.com/view/224117/" frameborder="0"></iframe>'
    },
    {
        name:'Huawei Mate 30 Black 3D Model',
        tag:'<iframe width="745" height="480" src="https://360.hum3d.com/view/211589/" frameborder="0"></iframe>'
    },
    {
        name:'Huawei P20 Black 3D mode',
        tag:'<iframe width="745" height="480" src="https://360.hum3d.com/view/205898/" frameborder="0"></iframe>'
    },
    {
        name:'Apple iPhone 13 Pro Gold 3D model',
        tag:'<iframe width="745" height="480" src="https://360.hum3d.com/view/224126/" frameborder="0"></iframe>'
    },
    {
        name:'Appel Iphone 13 mini 3d model',
        tag:'<iframe width="745" height="480" src="https://360.hum3d.com/view/219302/" frameborder="0"></iframe>'
    },
 ];
 const slideDisplay = (number)=>{
    const result = Math.random(number).toPrecision(1).slice(2);
    let num = Math.ceil(result);
    return num;
};
   const dimesions = document.querySelector('#itemBackground');
   dimesions.innerHTML = iframeData[slideDisplay(13)].tag;
   /* End home pages click event for 3d display images */
   /* cart number incrimenting*/
    // const upClick = document.querySelector('#upClick');
    // const downClick = document.querySelector('#downClick');
    const inputValue = document.querySelector('#iCount');
    // down function click
   function increment(){
    let value = inputValue.value;
    value++;
    inputValue.value = value;

   }
   function decrement(){
    let value = inputValue.value;
    value--;
    inputValue.value = value;

   }

    // console.log(inputValue);
    // console.log(downClick);
   /*  end of cart increament*/