# WhatsApp Clone (React + Vite)

Clon sencillo de WhatsApp para practicar **contactos**, **mensajes** y **ajustes** (idioma y modo energía).  
Incluye botón **Clip** con menú de adjuntos, **traducciones** ES/EN, **modo oscuro**, y persistencia en **localStorage**.

---

## Qué hace

- **Lista de contactos**.
- **Enviar mensajes** (texto + hora local), agregados a la conversación activa.
- **Ajustes** en un **popup**:
  - Activar **modo oscuro**
- **Botón Clip** con menú visual de adjuntos (**Galería, Contacto, Documento, Audio, Ubicación**). *(no es un popup; se abre con CSS)*
- **Ayuda** con guía rápida.

---

## 🛠️ Qué usamos

- **React + Vite** (desarrollo rápido).
- **React Router** (rutas básicas).
- **Context API**:
  - `SettingsContext`: idioma, modo energía, popup de settings, `t(...)`.
  - `ChatContext`: usuarios, usuario seleccionado y mensajes.
- **CSS** organizado por vista/componente:
  - `context/settings.css` → tema (modo oscuro) y estilos globales.
  - `views/clip.css` → estilos del componente Clip (estructura/animación).
  - `views/help.css` → estilos para Help.
- **Diccionario de traducciones** en `SettingsContext` (sin dependencias externas).
- **Accesibilidad**: `aria-label`, `role="menu"`/`role="menuitem"`, `aria-pressed`.

---

## 🗂️ Estructura de carpetas

```
src/
  assets/
    images/
      vertical-paperclip-outline-tall.svg   # ícono del clip
      avatar.jpeg
      logo.png
  component/
    Chat.jsx
    ProtectedRouter.jsx
    Sidebar.jsx
  context/
    ChatContext.jsx
    SettingsContext.jsx
    settings.css
  views/
    
    Login.jsx
    Messages.jsx
    NotFound.jsx
    Settings.jsx
  router/
    RouterApp.jsx
  index.css
  main.jsx
```

## 🌐 Rutas principales

- `/` → Chat
- `/help` → Ayuda
- `/settings` → En este proyecto, se usa un **popup** controlado por `SettingsContext`.

---

## 🔤 Traducciones (diccionario creado para más control)

- **Dónde**: objeto `TRANSLATIONS` dentro de `SettingsContext.jsx`.
- **Cómo**: en componentes, importar `useSettings()` y usar `t("clave")`.

```jsx
import { useSettings } from "../context/SettingsContext";
const { t } = useSettings();

<h1>{t("help")}</h1>
<button aria-label={t("attach")}>…</button>
```

> **Sugerencia**: cuando el proyecto crezca, migrar a **i18next** con archivos `es.json`/`en.json` y carga diferida.


**Clip en blanco**
```css
.energy .clip-icon {
  filter: brightness(0) invert(1);  /* <img> → blanco */
}

```
## 📎 Botón Clip (adjuntos)

- **Componente**: `views/Clip.jsx`
- **Estilos**: `views/clip.css`

**Comportamiento**

- **Abre/cierra solo con CSS** usando `:focus-within`:
  - Click en el clip → foco dentro → **menú visible**.
  - Click fuera → foco se va → **menú oculto**.
- **Accesible**: botón con `aria-label={t("attach")}`, menú con `role="menu"` y opciones con `role="menuitem"`.
- **Seguro**: cada opción tiene `type="button"` para no disparar `submit` si en el futuro queda dentro de formularios.
  *(Lo hacemos de este modo para no agregar otro popup y practicar más opciones).*

**Uso**
```jsx
import Clip from "./Clip";

<div className="chat-actions">
  <Clip />
</div>
```
---
## 💾 Persistencia

- **Mensajes/usuarios**: `localStorage.users` y `localStorage.selectedUser` (controlado por `ChatContext`).
- **Idioma**: `localStorage.lang`.
- **Tema**: `localStorage.energy`.

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
---
## 🗺️ Posibles mejoras

- **Clip funcional**:
  - Abrir **selector de archivos** (Galería/Documento).
  - **Compartir contacto**: seleccionar contacto y enviar tarjeta.
  - **Audio**: grabar/adjuntar mensajes de voz/audio.
  - **Ubicación**: leer geolocalización (con permiso) y enviarla como mensaje.

- **Contactos**:
  - **Crear/guardar** contactos desde un **input** (validar nombre/foto).
  - Editar/eliminar contactos.
  - Búsqueda y filtros avanzados.

- **Mensajería**:
  - Adjuntar **imágenes/documentos** reales y previsualizar.
  - **Reacciones** y **visto**.

- **i18n**:
  - Migrar a **i18next** + archivos `es.json`/`en.json`.
  - Carga remota de textos (actualizar sin redeploy).

- **Estado / Datos**:
  - Separar datos mock de UI.
  - Sincronizar con una API/DB (p. ej. Supabase/Firebase) para persistencia real.

## 📄 Licencia

Uso educativo. Podés adaptarlo y modificarlo libremente.
