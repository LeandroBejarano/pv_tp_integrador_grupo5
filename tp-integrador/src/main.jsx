import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import {store} from './services/store.jsx'
import 'bootstrap/dist/css/bootstrap.min.css' // ** línea importante!**
import './index.css' // CSS personalizado (donde está el padding-top del body)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // **Linea importante (incluye Popper.js)
import 'bootstrap-icons/font/bootstrap-icons.css'; // **¡Linea importante iconos!**

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
)