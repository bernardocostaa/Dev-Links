function togglemode(){
  const html = document.documentElement
  const img = document.querySelector('#profile img')

  html.classList.toggle('ligthy')

  if(html.classList.contains('ligthy')){
    img.setAttribute('src', './assets/Avatar2.png')
  }else{
    img.setAttribute('src', './assets/Avatar.png')
  }
}