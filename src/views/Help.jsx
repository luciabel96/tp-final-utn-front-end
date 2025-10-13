import { Link } from "react-router-dom";
// Asegúrate de importar tu archivo CSS si estás en un componente específico
// import './Help.css'; 

const Help = () => {
  return (
    // ASIGNAR la clase CSS al elemento principal <main>
    <main className="help-page"> 
      <h1>Página de Ayuda y Documentación.</h1>
      {/* Aquí iría todo tu texto de documentación (secciones, párrafos, listas, etc.) */}
      <p>
        Esta es la sección de ayuda principal. Aquí encontrarás información sobre el funcionamiento de la aplicación,
        las tecnologías utilizadas y nuestras futuras mejoras.
      </p>
      <h2>Apartados de la pagina principal:</h2>
      <h3>1.Panel de Contactos/Usuarios (Barra Lateral Izquierda):</h3>
      <p>Lista de Usuarios: Muestra una lista de contactos con los que el usuario puede interactuar.<p/>
      <p>Estado Online/Offline: Cada usuario tiene un indicador visual (un círculo verde o rojo) que muestra su estado de conexión.</p>
      <p>Selección de Conversación: Al hacer clic en uno de estos usuarios, se abre la ventana de chat correspondiente en el panel derecho.</p>
      <p>Buscador: En la parte superior izquierda: "Search..." permite filtrar rápidamente la lista de contactos.</p>
      </p>

      
      <h3>2.Panel de Conversación Activa:</h3>
      <p>Muestra el nombre del contacto con quien chateas. Aquí ves el historial de mensajes: los tuyos (burbujas a la derecha con hora) y, presumiblemente, los del otro a la izquierda. Se espera un campo inferior para escribir y enviar nuevos mensajes.</p>
      
      <h3>3.Barra Superio (Global):</h3>
      <p>Muestra tu nombre de usuario. Contiene íconos para acceder a funciones adicionales como ayuda, compartir contenido, configuración, o un menú de opciones, y un botón para "Cerrar sesión".</p>
      <p>📷:Camara, abre la camara del dispositivo</p>
      <p>🖼️:Galeria, abre la galeria del dispositivo</p>
      <p>⚙️:configuracion, abre las distintas posibilidades para su uso</p>
      <p>❓:Ayuda, abre el apartado de ayuda</p>

      <h2>Futuras mejoras:</h2>
      
       <p>Reacciones a mensajes: Permitir a los usuarios reaccionar a mensajes específicos con emojis para una interacción más dinámica.</p>
       <p>Chats grupales/Salas públicas: Expandir la funcionalidad para incluir conversaciones con múltiples participantes más allá de los chats individuales.</p>
       <p>Modo oscuro: Ofrecer un tema oscuro para mejorar la visualización en entornos con poca luz.</p>
       <p>Notificaciones mejoradas: Añadir personalización de notificaciones y previsualizaciones de mensajes.</p>
       
      

 


      {/* El link al chat con la clase text-info para decoración */}
      <p className="text-info">
        Cuando termines de leer la documentación, puedes volver al <Link to="/chat">Chat</Link> principal.
      </p>
    </main>
  )
}

export default Help;