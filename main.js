//MODO OSCURO - MODO CLARO
const mode = document.querySelector("#btnMode");

mode.addEventListener("click", () => {
  document.body.classList.toggle("lightmode");
  if (mode.textContent === "Modo Claro") {
    mode.textContent = "Modo Oscuro";
  } else {
    mode.textContent = "Modo Claro";
  }
});


// ASIDE //
const btnImage = document.getElementById('btnImage')
const btnText = document.getElementById('btnText')
const panelImage = document.getElementById('panel-image')
const panelText = document.getElementById('panel-text')

btnText.addEventListener('click', ()=> {
  panelText.classList.remove('d-none')
  panelImage.classList.add('d-none')
})

btnImage.addEventListener('click', ()=> {
  panelText.classList.add('d-none')
  panelImage.classList.remove('d-none')
})


// CHECKBOX //
const topInput = document.getElementById('topInput')
const topText = document.getElementById('topText')
const bottomInput = document.getElementById('bottomInput')
const bottomText = document.getElementById('bottomText')
const topCheck = document.getElementById('topCheck')
const bottomCheck = document.getElementById('bottomCheck')

topInput.addEventListener('input', (e) => {
    const textoIngresado = e.target.value;
    topText.innerHTML = textoIngresado;
})

bottomInput.addEventListener('input', (e) =>{
    const textoIngresado = e.target.value;
    bottomText.innerHTML = textoIngresado;
})


topCheck.addEventListener('click', () => {
    if(topCheck.checked == true){
        topText.classList.toggle('d-none')
        //memeBox.style.height = "300px"
    } else {
        topText.classList.remove('d-none')
        //memeBox.style.height = "250px"
    }
})

bottomCheck.addEventListener('click', () => {
    if(bottomCheck.checked == true){
        bottomText.classList.toggle('d-none')
        
    } else {
        bottomText.classList.remove('d-none')
    }
})


const bgTransp = document.getElementById('bg_transparent')

bgTransp.addEventListener('click', () => {
    if(bgTransp.checked == true){
        topText.style.backgroundColor = "transparent"
        bottomText.style.backgroundColor = "transparent"
    } else {
        topText.style.backgroundColor = `${colorBg.value}`
        bottomText.style.backgroundColor = `${colorBg.value}`
    }
})


//COLOR
let color = document.getElementById('color')
let codColor = document.getElementById('color_p')
let effect = document.getElementById('effect')

color.addEventListener('input', () => {
    codColor.innerHTML = `${color.value}`
    memeBox.style.backgroundColor = `${color.value}`
})

const efectos = () => {
    if(effect.value === "ninguno"){
        memeBox.style.mixBlendMode = ""
    } else if(effect.value === "oscurecer"){
        memeBox.style.mixBlendMode = "darken"
    } else if(effect.value === "aclarar"){
        memeBox.style.mixBlendMode = "lighten"
    } else if(effect.value === "diferencia"){
        memeBox.style.mixBlendMode = "difference"
    }  else if(effect.value === "luminosidad"){
        memeBox.style.mixBlendMode = "luminosity"
    }  else if(effect.value === "multiplicar"){
        memeBox.style.mixBlendMode = "multiply"
    }
}

effect.addEventListener('input', efectos)


// MEME //
const memeBox = document.getElementById('memeBox')
const inputUrl = document.getElementById('inputUrl')

inputUrl.addEventListener('input', (e) => {
    const urlIngresada = e.target.value;
    memeBox.style.background = `url("${urlIngresada}")`
    memeBox.style.backgroundSize = `cover`
})

// FILTROS //
let brillo = document.getElementById("brillo");
let opacidad = document.getElementById("opacidad");
let contraste = document.getElementById("contraste")
let desenfoque = document.getElementById("desenfoque")
let sepia = document.getElementById("sepia")
let negativo = document.getElementById("negativo")
let grises = document.getElementById("grises")
let hue = document.getElementById("hue")
let saturado = document.getElementById("saturado")

const filter = () => {
    memeBox.style.filter = `brightness(${brillo.value}%) opacity(${opacidad.value}%) contrast(${contraste.value}%) sepia(${sepia.value}%) invert(${negativo.value}%) blur(${desenfoque.value}px) grayscale(${grises.value}%) hue-rotate(${hue.value}deg) saturate(${saturado.value}%)`
}

brillo.addEventListener('input', filter)
opacidad.addEventListener('input', filter)
contraste.addEventListener('input', filter)
sepia.addEventListener('input', filter)
negativo.addEventListener('input', filter)
grises.addEventListener('input', filter)
hue.addEventListener('input', filter)
saturado.addEventListener('input', filter)
desenfoque.addEventListener('input', filter)

// Restablecer valores
document.getElementById("reset").addEventListener('click', ()=>{
    memeBox.style.filter = `brightness(100%) opacity(100%) contrast(100%) sepia(1%) invert(0%) blur(0px) grayscale(1%) hue-rotate(0deg) saturate(100%)`
}
)

// TEXTO 

let fonts = document.getElementById('fonts')
fonts.addEventListener('input', () => {
    if(fonts.value === "arial"){
        topText.style.fontFamily = "Arial"
        bottomText.style.fontFamily = "Arial"
    } else if (fonts.value === "arial black"){
        topText.style.fontFamily = "Arial Black"
        bottomText.style.fontFamily = "Arial Black"
    } else if (fonts.value === "american typewriter"){
        topText.style.fontFamily = "American Typewriter"
        bottomText.style.fontFamily = "American Typewriter"
    }else if (fonts.value === "andale mono"){
        topText.style.fontFamily = "Andale Mono"
        bottomText.style.fontFamily = "Andale Mono"
    } else if (fonts.value === "comic sans ms"){
        topText.style.fontFamily = "Comic Sans Ms"
        bottomText.style.fontFamily = "Comic Sans Ms"
    } else if (fonts.value === "helvetica"){
        topText.style.fontFamily = "Helvetica"
        bottomText.style.fontFamily = "Helvetica"
    } else if (fonts.value === "impact"){
        topText.style.fontFamily = "Impact"
        bottomText.style.fontFamily = "Impact"
    } else if (fonts.value === "verdana"){
        topText.style.fontFamily = "Verdana"
        bottomText.style.fontFamily = "Verdana"
    } else if (fonts.value === "times new roman"){
        topText.style.fontFamily = "Times New Roman"
        bottomText.style.fontFamily = "Times New Roman"
    }
})

// COLORES TEXTO
let colorTxt = document.getElementById("colorTxt")
let colorBg = document.getElementById("colorBg")

colorTxt.addEventListener('input', () => {
    topText.style.color = `${colorTxt.value}`
    bottomText.style.color = `${colorTxt.value}`
    document.getElementById("colorCodTxt").innerHTML = `${colorTxt.value}`
})

colorBg.addEventListener('input', () => {
    topText.style.backgroundColor = `${colorBg.value}`
    bottomText.style.backgroundColor = `${colorBg.value}`
    document.getElementById("colorCodBg").innerHTML = `${colorBg.value}`
})

// ALIGN

document.getElementById("align_left").addEventListener('click', ()=>{
    topText.style.textAlign= "left"
    bottomText.style.textAlign= "left"
})

document.getElementById("align_center").addEventListener('click', ()=>{
    topText.style.textAlign= "center"
    bottomText.style.textAlign= "center"
})

document.getElementById("align_right").addEventListener('click', ()=>{
    topText.style.textAlign= "right"
    bottomText.style.textAlign= "right"
})

// DESCARGA
const btnDownload = document.getElementById('download_btn')

btnDownload.addEventListener('click', () => 
    domtoimage.toBlob(document.getElementById('meme')).then((blob) => 
        saveAs(blob, 'meme.png')
        )
    )


// CONTORNO

const contornoN = document.getElementById('stroke_none')
const contornoL = document.getElementById('stroke_light')
const contornoD = document.getElementById("stroke_dark")

contornoN.addEventListener('click', () => {
    topText.style.textShadow = "none" 
    bottomText.style.textShadow = "none"
})


contornoL.addEventListener('click', () => {
    topText.style.textShadow = "2px 2px white" 
    bottomText.style.textShadow = "2px 2px white"
})

contornoD.addEventListener('click', () => {
    topText.style.textShadow = "2px 2px black" 
    bottomText.style.textShadow = "2px 2px black"
})

// TAMANO

const size = document.getElementById('size')

size.addEventListener('input', ()=> {
    const tam = size.value
    topText.style.fontSize = `${tam}px`
    bottomText.style.fontSize = `${tam}px`
})

// ESPACIADO
const espaciado = document.getElementById("espaciado")

espaciado.addEventListener("input", ()=> {
    const tam = espaciado.value
    topText.style.padding= `${tam}px`
    bottomText.style.padding = `${tam}px`
})

// Interlineado
const interlineado = document.getElementById("linespacing")

interlineado.addEventListener('input', () => {
    const tam = interlineado.value
    topText.style.lineHeight= `${tam}`
    bottomText.style.lineHeight= `${tam}`
})