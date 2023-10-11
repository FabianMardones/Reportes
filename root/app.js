/** Esta función de print canvas, está detallando el formato de impresión obtenida desde la libreria html2pdf */
function print_canvas(){
  const element = document.getElementById('contenido')
  html2pdf().set({
      margin:   2,
      filename:   'ReporteEncuentro.pdf',
      image:      { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPdf:       { unit: 'in', format: 'a4', orientation: 'portrait' }
  }).from(element).save().toPdf().catch(error=>console.log(error));
}


/**Los selectores para cada input, para manipular los valores que se ingresen a cada uno*/


/** Primero tenemos Los selectores para manipular el primer grupo de datos, como son los datos de día fechas y pastores y, para manipular los valores que se ingresen a cada uno*/
const pastoresCampus = document.querySelector('#pastoresCampus')
const ministrosEncargados = document.querySelector('#ministrosEncargados')
const lideresVoluntarios = document.querySelector('#lideresVoluntarios')
const fecha = document.querySelector('#fecha')
const hora = document.querySelector('#hora')
const modalidad = document.querySelector('#modalidad')
const campus = document.querySelector('#campus')

/**En esta sección se encuentran seleccionadas las asistencias*/
const asistencialAdulto = document.querySelector('#adultos')
const asistenciaKids = document.querySelector('#kids')
const asistenciaTweens = document.querySelector('#tweens')
const asistenciaServicio = document.querySelector('#servicioVoluntarios')
const asistenciaTecnica = document.querySelector('#tecnicaVoluntarios')
const asistenciaKidsVoluntarios = document.querySelector('#kidsVoluntarios')
const asistenciaTweensVoluntarios = document.querySelector('#tweensVoluntarios')
const asistenciaWorshipVoluntarios = document.querySelector('#worshipVoluntarios')
const asistenciaCocinaVoluntarios = document.querySelector('#cocinaVoluntarios')
const asistenciaRedesSocialesVoluntarios = document.querySelector('#redesSocialesVoluntarios')
const asistenciaSeguridadVoluntarios = document.querySelector('#seguridadVoluntarios')
const asistenciaSalaDeBebesVoluntarios = document.querySelector('#salaBebesVoluntarios')
const infoStand = document.querySelector('#infoVoluntarios')
const oracionStand = document.querySelector('#oracionVoluntarios')
const standRecursos = document.querySelector('#recursosVoluntarios')
const standAmorPorLaCasa = document.querySelector('#amorPorLaCasaVoluntarios')
const standProyectoEducativo = document.querySelector('#proyectoEducativoVoluntarios')

/**En esta sección se encuentran seleccionadas las asistencias y el botón que generará automáticamente la suma*/
const botonCalcular = document.querySelector('#calcular')
const totalAsistentes = document.querySelector('#totalAsistentes')

/**Muy importante llevar el registro de las personas que aceptaron a Jesús*/
const aceptaPresencial = document.querySelector('#aceptaPresencial')
const aceptaOnline = document.querySelector('#aceptaOnline')
const aceptaTweens = document.querySelector('#aceptaTweens')

/**Nombre del predicador y el mensaje */
const predicador = document.querySelector('#nombrePredicador')
const nombreMensaje = document.querySelector('#nombreMensaje')

/**La última parte del reporte, las observaciones que por cierto son obligatorias*/
const obervaciones = document.querySelector('#observaciones')

/** selector del formulario */
const formulario = document.querySelector('.formularioForm')

/**botones de rest y submit */
const btnSubmit = document.querySelector('button[type="submit"]')
const btnReset = document.querySelector('button[type="reset"]')

/**Container doc, es un contenedor el cual recibirá el reporte dinámicamente mediante javascript al presionar generar reporte*/
const containerDoc = document.querySelector('.container')




const objetoForm = {
  pastoresCampus: '',
  ministrosEncargados: '',
  lideresVoluntarios: '',
  fecha: '',
  hora: '',
  modalidad: '',
  campus: '',
  adultos: '',
  kids: '',
  tweens: '',
  servicioVoluntarios: '',
  tecnicaVoluntarios: '',
  kidsVoluntarios: '',
  tweensVoluntarios: '',
  worshipVoluntarios: '',
  cocinaVoluntarios: '',
  redesSocialesVoluntarios: '',
  seguridadVoluntarios: '',
  salaBebesVoluntarios: '',
  infoVoluntarios: '',
  oracionVoluntarios: '',
  recursosVoluntarios: '',
  amorPorLaCasaVoluntarios: '',
  proyectoEducativoVoluntarios: '',
  totalAsistentes: Number(),
  aceptaPresencial: '',
  aceptaOnline: '',
  aceptaTweens: '',
  nombrePredicador: '',
  nombreMensaje: '',
  observaciones: ''
}




function agruparEventListener(){

    pastoresCampus.addEventListener('change', validacion)
    ministrosEncargados.addEventListener('change', validacion)
    lideresVoluntarios.addEventListener('input',validacion)
    fecha.addEventListener('input',validacion)
    hora.addEventListener('input',validacion)
    modalidad.addEventListener('change',validacion)
    campus.addEventListener('change',validacion)

    asistencialAdulto.addEventListener('input',validacion)
    asistenciaKids.addEventListener('input',validacion)
    asistenciaTweens.addEventListener('input',validacion)

    asistenciaServicio.addEventListener('input',validacion)
    asistenciaTecnica.addEventListener('input',validacion)
    asistenciaKidsVoluntarios.addEventListener('input',validacion)
    asistenciaTweensVoluntarios.addEventListener('input',validacion)
    asistenciaWorshipVoluntarios.addEventListener('input',validacion)
    asistenciaCocinaVoluntarios.addEventListener('input',validacion)
    asistenciaRedesSocialesVoluntarios.addEventListener('input',validacion)
    asistenciaSeguridadVoluntarios.addEventListener('input',validacion)
    asistenciaSalaDeBebesVoluntarios.addEventListener('input',validacion)

    infoStand.addEventListener('input', validacion)
    oracionStand.addEventListener('input', validacion)
    standRecursos.addEventListener('input', validacion)
    standAmorPorLaCasa.addEventListener('input', validacion)
    standProyectoEducativo.addEventListener('input', validacion)



    aceptaPresencial.addEventListener('input', validacion)
    aceptaOnline.addEventListener('input', validacion)
    aceptaTweens.addEventListener('input', validacion)

    predicador.addEventListener('change', validacion)
    nombreMensaje.addEventListener('input', validacion)

    obervaciones.addEventListener('input', validacion)

    botonCalcular.addEventListener('click', ((e) =>{
      e.preventDefault()
      calcularTotalAsistencia()
      validacionTotalAsistentes()
    }))

    formulario.addEventListener('submit', registrarDatos)

    btnReset.addEventListener('click', (e) =>{
        e.preventDefault()
        resetearFormulario()
    })
}
agruparEventListener()

let contenidoGenerado = false




function resetearFormulario() {
  // Obtén todos los campos del formulario
  const formFields = formulario.elements;

  // Recorre los campos y restablécelos
  for (const field of formFields) {
    if (field.type !== 'button' && field.type !== 'submit' && field.type !== 'reset') {
      field.value = ''; // Restablece el valor del campo
    }
  }

  // Elimina los mensajes de alerta
  const alertas = document.querySelectorAll('.alerta');
  alertas.forEach(alerta => alerta.remove());

  // Reinicia el objetoForm
  for (const prop in objetoForm) {
    objetoForm[prop] = '';
  }

  comprobarObjetoForm();

  // formulario.reset(); // Esto no es necesario ya que hemos restablecido los campos manualmente
}




function validacion(e){
  e.preventDefault()

  const valorInput = e.target.value
  const referencia = e.target.parentElement
  const nameInput = e.target.name
  const mensaje = `El campo ${nameInput} es obligatorio`
  
  if(valorInput === ''){
    mensajeAlerta(mensaje, referencia)
    objetoForm[e.target.id] = ''
    comprobarObjetoForm()
    return
  }

  if(nameInput === 'Lideres de voluntarios' && Number(valorInput)){
    mensajeAlerta(`El campo ${nameInput} debe ser texto`,referencia)
    objetoForm[e.target.id] = ''
    comprobarObjetoForm()
    return
  }

  if (nameInput === 'Nombre del predicador' && Number(valorInput)) {
    mensajeAlerta(`El campo ${nameInput} debe ser texto`,referencia)
    objetoForm[e.target.id] = ''
    comprobarObjetoForm()
    return
  }

  if (nameInput === 'Mensaje' && Number(valorInput)) {
    mensajeAlerta(`El campo ${nameInput} debe ser texto`,referencia)
    objetoForm[e.target.id] = ''
    comprobarObjetoForm()
    return
  }

  eliminarMensajeAlerta(referencia)

  objetoForm[e.target.id] = valorInput.toLowerCase()

  comprobarObjetoForm()
}




function validacionTotalAsistentes() {
  const totalAsistencia = (totalAsistentes.value);

  if (isNaN(totalAsistencia) || totalAsistencia < 0) {
    mensajeAlerta('El campo Total Asistentes debe ser un número válido', totalAsistentes.parentElement);
    objetoForm.totalAsistentes = '';
    comprobarObjetoForm();
  } else {
    eliminarMensajeAlerta(totalAsistentes.parentElement);
    objetoForm.totalAsistentes = totalAsistencia;
    comprobarObjetoForm();
  }
}




function registrarDatos(e){
  e.preventDefault()

  containerDoc.innerHTML = `

  <div class="card face back" style="margin-top: 20px;">


  <div class="card-header d-flex justify-content-between no-print">
    <h3 class="text-dark">Ar <strong class="ministries">Ministries</strong></h3>
    <button class="btn btn-success no-print btn-descargar" onclick="print_canvas()">Descargar</button>
  </div>

  <div class="card-body" id="contenido">

  <div class="w-100 d-flex row flex-row-reverse align-content-between" style="margin-top: 10px; text-align: right !important;">
    <h1 class="w-50" style="color: #524d4d ; font-family: monospace; text-align: end;">Reporte Encuentro</h1>
    <h1 class="w-50" style="color: #524d4d ; font-family: monospace; text-align: start;">AR <strong class="ministries">Ministries</strong></h1>
  </div>

  <div class="d-flex justify-content-between">
  <div>
    <h5 class="text-dark"><b>Pastor Principal</b></h5>
    Patricio Burgos <br>
    patricio.burgos@arministries.com <br>
    +569 7777777 <br>
    Chile, Puente Alto <br>
  </div>
  <!-- <div style="text-align: right !important;">
    <h5 class="text-dark"><b>Pastor Principal</b></h5>
    Patricio Burgos <br>
    patricio.burgos@arministries.com<br>
    +569 7777777 <br>
    Chile, Puente Alto <br>
  </div> -->
  </div>

  <div class="d-flex justify-content-between" style="margin-top: 20px;">
    <div>
      <span><b>Fecha y Hora</b></span>
      <br>
      <span>${objetoForm.fecha}, ${objetoForm.hora}</span>
    </div>
    <div>
      <span><b>Modalidad</b></span>
      <br>
      <span>${objetoForm.modalidad}</span>
    </div>
    <div>
      <span><b>Campus</b></span>
      <br>
      <span>${objetoForm.campus}</span>
    </div>
    <div>
      <span><b>Lideres de voluntarios</b></span>
      <br>
      <span>${objetoForm.lideresVoluntarios}</span>
    </div>
    <div>
      <span><b>Pastores de campus</b></span>
      <br>
      <span class="pastores">${objetoForm.pastoresCampus}</span>
    </div>
    <div>
      <span><b>Ministros Encargados</b></span>
      <br>
      <span class="pastores">${objetoForm.ministrosEncargados}</span>
    </div>
  </div>

<h4 style="color: black; margin-top: 0;">Asistencia</h4>
    
    <table class="table table-bordered table-striped">
      <thead>
        <th>Adultos</th>
        <th>Kids</th>
        <th>Tweens</th>
      </thead>
      <tbody>
        <tr>
          <td>${objetoForm.adultos}</td>
          <td>${objetoForm.kids}</td>
          <td>${objetoForm.tweens}</td>
        </tr>
      </tbody>
    </table>
    
    <br>

    <h4 style="color: black;">Voluntarios</h4>
    
    <table class="table table-bordered table-striped">
      <thead>
        <th>Servcio</th>
        <th>Técnica</th>
        <th>Kids</th>
        <th>Tweens</th>
        <th>Worhsip</th>
        <th>Cocina</th>
        <th>Redes Sociales</th>
        <th>Seguridad</th>
        <th>Sala de bebés</th>
      </thead>
      <tbody>
        <tr>
          <td>${objetoForm.servicioVoluntarios}</td>
          <td>${objetoForm.tecnicaVoluntarios}</td>
          <td>${objetoForm.kidsVoluntarios}</td>
          <td>${objetoForm.tweensVoluntarios}</td>
          <td>${objetoForm.worshipVoluntarios}</td>
          <td>${objetoForm.cocinaVoluntarios}</td>
          <td>${objetoForm.redesSocialesVoluntarios}</td>
          <td>${objetoForm.seguridadVoluntarios}</td>
          <td>${objetoForm.salaBebesVoluntarios}</td>
        </tr>
      </tbody>
    </table>
    
    <br>

    <h4 style="color: black;">Stand</h4>
    
    <table class="table table-bordered table-striped">
      <thead>
        <th>Info</th>
        <th>Oración</th>
        <th>Recursos</th>
        <th>Amor por la casa</th>
        <th>Proyecto educativo</th>
      </thead>
      <tbody>
        <tr>
          <td>${objetoForm.infoVoluntarios}</td>
          <td>${objetoForm.oracionVoluntarios}</td>
          <td>${objetoForm.recursosVoluntarios}</td>
          <td>${objetoForm.amorPorLaCasaVoluntarios}</td>
          <td>${objetoForm.proyectoEducativoVoluntarios}</td>
        </tr>
      </tbody>
    </table>
    
    <br>

    <h4 style="color: black;">Total General</h4>
    
    <table class="table table-bordered table-striped">
      <thead>
        <th>Total</th>
      </thead>
      <tbody>
        <tr>
          <td>${objetoForm.totalAsistentes}</td>
        </tr>
      </tbody>
    </table>
    
    <br>

    <h4 style="color: black;">Personas que aceptaron a Jesús</h4>
    
    <table class="table table-bordered table-striped">
      <thead>
        <th>Presencial</th>
        <th>YouTube</th>
        <th>Tweens</th>
      </thead>
      <tbody>
        <tr>
          <td>${objetoForm.aceptaPresencial}</td>
          <td>${objetoForm.aceptaOnline}</td>
          <td>${objetoForm.aceptaTweens}</td>
        </tr>
      </tbody>
    </table>
    <br>
    

      <div>
        <div>
          <span><b>Nombre Predicador</b></span>
          <br>
          <span>${objetoForm.nombrePredicador}</span>
        </div>
        <div>
          <span><b>Nombre Mensaje</b></span>
          <br>
          <span>${objetoForm.nombreMensaje}</span>
          
        </div>
      </div>

      <h4 style="color: black;">Observaciones</h4>
      <table class="table table-bordered table-striped">
        <thead>
          <th>Observaciones</th>
        </thead>
        <tbody>
          <tr>
            <td>${objetoForm.observaciones}</td>
          </tr>
        </tbody>
      </table>
      <h4 style="color: black;"></h4>
      <table class="table table-bordered table-striped">
        <thead>
          <th></th>
        </thead>
        <tbody>
          <img class="img-relleno" src="./assets/img/Fondo BLanco Pequeño.png" alt="">
        </tbody>
      </table>
</div>
</div>
  `
  document.getElementById('mensajeInicial').textContent = 'El informe está listo';
  contenidoGenerado = true
  card2.style.display = 'block';

  resetearFormulario() 
}



function mensajeAlerta(mensaje, referencia){

  eliminarMensajeAlerta(referencia)

    const mensajeError = document.createElement('p')
    mensajeError.textContent = mensaje
    mensajeError.className = 'text-light w-100 p-2 bg-danger fw-bold fs-5 alerta'

    referencia.appendChild(mensajeError)

}


function eliminarMensajeAlerta(referencia){
  const alerta = referencia.querySelector('.alerta')

  if(alerta){
    alerta.remove()
  }
}


function calcularTotalAsistencia() {

  const totalAsistencia =
    Number(asistencialAdulto.value) +
    Number(asistenciaKids.value) +
    Number(asistenciaTweens.value) +
    Number(asistenciaServicio.value) +
    Number(asistenciaTecnica.value) +
    Number(asistenciaKidsVoluntarios.value) +
    Number(asistenciaTweensVoluntarios.value) +
    Number(asistenciaWorshipVoluntarios.value) +
    Number(asistenciaCocinaVoluntarios.value) +
    Number(asistenciaRedesSocialesVoluntarios.value) +
    Number(asistenciaSeguridadVoluntarios.value) +
    Number(asistenciaSalaDeBebesVoluntarios.value) +
    Number(infoStand.value) +
    Number(oracionStand.value) +
    Number(standRecursos.value) +
    Number(standAmorPorLaCasa.value) +
    Number(standProyectoEducativo.value);

  document.querySelector('#totalAsistentes').value = totalAsistencia;
}

function ocultarCard2(){
  const windowWidth = window.innerWidth;

  if (windowWidth <= 1090 && !contenidoGenerado) {
    card2.style.display = 'none';
  } else {
    card2.style.display = 'block';
  }
}


window.addEventListener('resize', () => {
  ocultarCard2()
});

document.addEventListener('DOMContentLoaded', () =>{
  ocultarCard2()
})

function comprobarObjetoForm(){

  console.log(objetoForm);

  const tieneValorVacio = Object.values(objetoForm).includes('')
  
  if (tieneValorVacio) {
    btnSubmit.disabled = true
    return
  }
  btnSubmit.disabled = false
}



