const preview = document.getElementById("preview"),
      styles = document.getElementById('styles'),
      ranges = document.querySelectorAll('.settings input'),
      copybutton = document.getElementById('copy-styles'),
      cont =  document.getElementById("box-container"),
      body = document.getElementById("box-container").parentElement;
     
   

    //   add event listeners on every range input by using foreach
    ranges.forEach((slider) => {
        slider.addEventListener('input',generatorStyles)
        
        
    });

   

    // now we will make function to generate and update color styles

    function generatorStyles(){
        // in this function we will get all input and get there values
        const xshadow = document.getElementById('x-shadow').value;
        const yshadow = document.getElementById('y-shadow').value;
        const BlurRadius = document.getElementById('blur-r').value;
        const SpreadRadius = document.getElementById("spread-r").value;
        const BorderRadius = document.getElementById('border-r').value;
        const ShadowOpacity = document.getElementById('shadow-opacity').value;
        const InsetShadow = document.getElementById('inset-shadow').checked;
        const ShadowColor = document.getElementById('shadow-color').value;
        const boxcolor = document.getElementById("box-color").value;
        
        
        // create the box shadow property value
     
        const BoxShadow = `${InsetShadow ? "inset " : ""}${xshadow}px ${yshadow}px 
        ${BlurRadius}px ${SpreadRadius}px ${hextoRgba(ShadowColor,ShadowOpacity)}`;
        // this is used for the blue box  after we put this in preview 
        // it repersents like this box-shadow: inset 10px 15px 20px 5px rgba(34, 34, 34, 0.5);

       
        // update the preview element style
        preview.style.boxShadow = BoxShadow;        
        // upar vali jo prop hai vo boxshdow me chli gyi or usko humne perview means blue box me dal diya
        preview.style.borderRadius = `${BorderRadius}px`;
         

        cont.style.boxShadow = BoxShadow;
        
        cont.style.borderRadius = `${BorderRadius}px`;
      
        // it will change background color
        body.style.backgroundColor = boxcolor;

        //  it will change the color of btn
        copybutton.style.backgroundColor = boxcolor;
        
        //  it will change the preview box backgroundcolor
        preview.style.backgroundColor = boxcolor;


        
        

        // update textarea with generate style dyanmically
        styles.textContent = `box-shadow:${BoxShadow}\nborder-radius:${BorderRadius}px\nbackground-color:${boxcolor}`;

    }

    
        
        
    

// function to convert hex color into rgba format

function hextoRgba(ShadowColor,ShadowOpacity){
    const r = parseInt(ShadowColor.substr(1,2),16);  
    const g = parseInt(ShadowColor.substr(3,2),16);
    const b = parseInt(ShadowColor.substr(5,2),16);

    // substr(shadowColor.substr(1,2)16);
    // hex is in string rrggbb this 1,2 will get rr and covert it into integer in 16.
   
    return `rgba(${r} , ${g} , ${b} , ${ShadowOpacity})`;

}

// function to copy the style from textarea//

function CopyStyles(){
    styles.select()
    // this will select the textarea
    document.execCommand("copy");
    // execCommand function is a method in JavaScript that allows you to copy the current selection or specified text to the clipboard
    copybutton.innerText = "Copied!";
    setTimeout(()=>{
        copybutton.innerText = 'Copy Style';
    },500);
}


    generatorStyles();

  

