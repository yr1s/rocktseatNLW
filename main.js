const LinksSocialMedia = {
  github: 'yr1s',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'yris_a.l',
  twitter: 'Cupcake_70'
}
function changeLinksSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeLinksSocialMedia()

//* ser humano conta 123455 e o computador conta 0123456 *//
function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      //textcontent é para mexer na dom e conseguir substituir textos
      userLink.href = data.html_url
      //o .href é para substituir links
      userPhoto.src = data.avatar_url
      //.src é para substituir a imagem
      userLogin.textContent = data.login
    })

  // fetch vai ate á url e pegar oq esta lá obs= o fentch nã sabe q os dados é um json
  //o retorno dissoo vai entrar no then
  //um then pega a resposta do outro
}
getGithubProfileInfos()

//arrow funtions
// funtion nomedafuncao(){
//code
//}
// argumento=>{}----> isto é uma função anonima
//arrow funtions é uma forma da gente comtrair uma função sem ter que criar outra
