document.querySelector('#header-container').style.backgroundColor = '#3f8e54'

document.querySelector('footer').style.backgroundColor = '#243d34';

document.querySelector('.emergency-tasks').style.backgroundColor = 'lightsalmon'

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'rgb(248, 248, 111)'

const divs = document.querySelectorAll('div h3')

for (const i in divs) {
  if (i <= 1) {
    divs[i].style.backgroundColor = '#920092'
  } else if (i <= 3) {
    divs[i].style.backgroundColor = '#222020'
  }
}
