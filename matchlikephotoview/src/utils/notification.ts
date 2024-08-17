import { toast } from 'react-toastify'
import Swal, { SweetAlertIcon } from 'sweetalert2'

export const Alert = Swal.mixin({ heightAuto: false })

export const showNotification = (
  titulo = '',
  msg: string,
  tipo: 'info' | 'warning' | 'error' | 'success',
  isToast = false
) => {
  if (isToast) {
    toast[tipo](msg)
    return
  }

  Alert.fire(titulo, msg, tipo)
}

export const showNotificationErrorAPI = (error: any) => {
  let errorMsg = 'Não foi possível concluir a solicitação'

  try {
    if (error.response?.data?.erros) {
      errorMsg = error.response?.data?.erros
        ?.map((e: any) => e?.message)
        .join(', ')
    }
  } catch {
    errorMsg = 'Não foi possível concluir a solicitação'
  }

  Alert.fire('Ops...', errorMsg, 'error')
}
