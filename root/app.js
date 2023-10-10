function print_canvas(){
  const element = document.getElementById('contenido')
  html2pdf().set({
      margin:     2,
      filename:   'ReporteEncuentro.pdf',
      image:      { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPdf:       { unit: 'in', format: 'letter', orientation: 'portrait' }
  }).from(element).save().catch(error=>console.log(error));
}


const pastoresCampus = document.querySelector('#pastoresCampus')
const lideresVoluntarios = document.querySelector('#lideresVoluntarios')
const fecha = document.querySelector('#fecha')
const hora = document.querySelector('#hora')
const modalidad = document.querySelector('#modalidad')
const campus = document.querySelector('#campus')

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

const totalAsistentes = document.querySelector('#totalAsistentes')

const aceptaPresencial = document.querySelector('#aceptaPresencial')
const aceptaOnline = document.querySelector('#aceptaOnline')
const aceptaTweens = document.querySelector('#aceptaTweens')

const predicador = document.querySelector('#nombrePredicador')
const nombreMensaje = document.querySelector('#nombreMensaje')

const obervaciones = document.querySelector('#observaciones')

const botonCalcular = document.querySelector('#calcular')

const btnSubmit = document.querySelector('#registrar')

const btnReset = document.querySelector('#reset')

const containerDoc = document.querySelector('.container')

const card2 = document.querySelector('.card2')
const face = document.querySelector('.face')
const front = document.querySelector('.front')
const formulario = document.querySelector('#formulario')
const card1 = document.querySelector('.card1')
const containerCards = document.querySelector('.container-cards')



const objetoForm = {
  pastoresCampus: '',
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
  totalAsistentes: '',
  aceptaPresencial: '',
  aceptaOnline: '',
  aceptaTweens: '',
  nombrePredicador: '',
  nombreMensaje: '',
  observaciones: ''
}

function agruparEventListener(){
    pastoresCampus.addEventListener('blur',validacion)
    lideresVoluntarios.addEventListener('blur',validacion)
    fecha.addEventListener('blur',validacion)
    hora.addEventListener('blur',validacion)
    modalidad.addEventListener('blur',validacion)
    campus.addEventListener('blur',validacion)

    asistencialAdulto.addEventListener('blur',validacion)
    asistenciaKids.addEventListener('blur',validacion)
    asistenciaTweens.addEventListener('blur',validacion)

    asistenciaServicio.addEventListener('blur',validacion)
    asistenciaTecnica.addEventListener('blur',validacion)
    asistenciaKidsVoluntarios.addEventListener('blur',validacion)
    asistenciaTweensVoluntarios.addEventListener('blur',validacion)
    asistenciaWorshipVoluntarios.addEventListener('blur',validacion)
    asistenciaCocinaVoluntarios.addEventListener('blur',validacion)
    asistenciaRedesSocialesVoluntarios.addEventListener('blur',validacion)
    asistenciaSeguridadVoluntarios.addEventListener('blur',validacion)
    asistenciaSalaDeBebesVoluntarios.addEventListener('blur',validacion)

    infoStand.addEventListener('blur', validacion)
    oracionStand.addEventListener('blur', validacion)
    standRecursos.addEventListener('blur', validacion)
    standAmorPorLaCasa.addEventListener('blur', validacion)
    standProyectoEducativo.addEventListener('blur', validacion)

    totalAsistentes.addEventListener('blur', validacion)

    aceptaPresencial.addEventListener('blur', validacion)
    aceptaOnline.addEventListener('blur', validacion)
    aceptaTweens.addEventListener('blur', validacion)

    predicador.addEventListener('blur', validacion)
    nombreMensaje.addEventListener('blur', validacion)

    obervaciones.addEventListener('blur', validacion)

    botonCalcular.addEventListener('click', calcularTotalAsistencia)

    btnReset.addEventListener('reset', (e) =>{
        e.preventDefault()

        resetearFormulario()
    })

    formulario.addEventListener('submit', registrarDatos)
}

agruparEventListener()


let contenidoGenerado = false

function registrarDatos(e){
  e.preventDefault()

  containerDoc.innerHTML = `

  <div class="card face back" style="margin-top: 20px;">


  <div class="card-header d-flex justify-content-between">
    <h3 class="text-dark">Ar <strong>Ministries</strong></h3>
    <button class="btn btn-success no-print" onclick="print_canvas()">imprimir</button>
  </div>

  <div class="card-body" id="contenido">

  <div class="w-100 d-flex row flex-row-reverse align-content-between" style="margin-top: 10px; text-align: right !important;">
    <h1 class="w-50" style="color: #524d4d ; font-family: monospace; text-align: end;">Reporte Encuentro</h1>
    <h1 class="w-50" style="color: #524d4d ; font-family: monospace; text-align: start;">AR <strong>Ministries</strong></h1>
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
  </div>

<h4 style="color: black; margin-top: 0;">Asistencia</h4>
    <hr>
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
    <hr>
    <br>

    <h4 style="color: black;">Voluntarios</h4>
    <hr>
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
    <hr>
    <br>

    <h4 style="color: black;">Stand</h4>
    <hr>
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
    <hr>
    <br>

    <h4 style="color: black;">Total General</h4>
    <hr>
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
    <hr>
    <br>

    <h4 style="color: black;">Personas que aceptaron a Jesús</h4>
    <hr>
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
    <hr>

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
          <hr>
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
      <hr>
</div>
</div>
  `
      const registerPeople = peopleRef.push()
    registerPeople.set({
      Uid : registerPeople.path.pieces_[1],
      Fecha: objetoForm.fecha,
      Hora: objetoForm.hora,
      Modalidad: objetoForm.modalidad,
      Campus: objetoForm.campus,
      Pastores_de_campus: objetoForm.pastoresCampus,
      Lideres_voluntarios: objetoForm.lideresVoluntarios,
      Asistencia_adultos: objetoForm.adultos,
      Asistencia_kids: objetoForm.kids,
      Asistencia_tweens: objetoForm.tweens,
      Asistencia_voluntarios: objetoForm.servicioVoluntarios,
      Asistencia_tecnica: objetoForm.tecnicaVoluntarios,
      Asistencia_voluntarios_kids: objetoForm.kidsVoluntarios,
      Asistencia_voluntarios_tweens: objetoForm.tweensVoluntarios,
      Asistencia_worship: objetoForm.worshipVoluntarios,
      Asistencia_cocina: objetoForm.cocinaVoluntarios,
      Asistencia_redes_sociales: objetoForm.redesSocialesVoluntarios,
      Asistencia_seguridad: objetoForm.seguridadVoluntarios,
      Asistencia_voluntarios_sala_de_bebes: objetoForm.salaBebesVoluntarios,
      Stand_info: objetoForm.infoVoluntarios,
      Stand_oracion: objetoForm.oracionVoluntarios,
      Stand_recursos: objetoForm.recursosVoluntarios,
      Stand_amor_por_la_casa: objetoForm.amorPorLaCasaVoluntarios,
      Stand_proyecto_educativo: objetoForm.proyectoEducativoVoluntarios,
      Total_asistentes: objetoForm.totalAsistentes,
      Acepta_a_jesus_presencial: objetoForm.aceptaPresencial,
      Acepta_a_jesus_online: objetoForm.aceptaOnline,
      Acepta_a_jesus_tweens: objetoForm.aceptaTweens,
      Nombre_predicador: objetoForm.nombrePredicador,
      Nombre_mensaje: objetoForm.nombreMensaje,
      Observaciones: objetoForm.observaciones
    })

  document.getElementById('mensajeInicial').textContent = 'El informe está listo';
  contenidoGenerado = true
  card2.style.display = 'block';
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


function calcularTotalAsistencia(e) {
  e.preventDefault();

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


function comprobarObjetoForm(){

  console.log(objetoForm);

  const tieneValorVacio = Object.values(objetoForm).includes('')
  
  if (tieneValorVacio) {
    btnSubmit.disabled = true
    return
  }
  btnSubmit.disabled = false
}


function resetearFormulario(){
  objetoForm.pastoresCampus = ''
  objetoForm.lideresVoluntarios = ''
  objetoForm.fecha = ''
  objetoForm.hora = ''
  objetoForm.modalidad = ''
  objetoForm.campus = ''
  objetoForm.adultos = ''
  objetoForm.kids = ''
  objetoForm. tweens = ''
  objetoForm.servicioVoluntarios = ''
  objetoForm. tecnicaVoluntarios = ''
  objetoForm.kidsVoluntarios = ''
  objetoForm.tweensVoluntarios = ''
  objetoForm.worshipVoluntarios = ''
  objetoForm.cocinaVoluntarios = ''
  objetoForm.redesSocialesVoluntarios = ''
  objetoForm.seguridadVoluntarios = ''
  objetoForm.salaBebesVoluntarios = ''
  objetoForm.totalAsistentes = ''
  objetoForm.aceptaPresencial = ''
  objetoForm.aceptaOnline = '',
  objetoForm.aceptaTweens = '',
  objetoForm.nombrePredicador = ''
  objetoForm.nombreMensaje = ''
  objetoForm.observaciones = ''

  comprobarObjetoForm()

  formulario.reset()
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

