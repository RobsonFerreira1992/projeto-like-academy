import axios, { AxiosResponse } from 'axios'
// import api from 'service/api'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false // Verifique se isso ajuda
})

export async function obterImages(): Promise<AxiosResponse<any>> {
  try {
    const response = await api.get('/Images')
    return response
  } catch (error) {
    console.error('Erro ao obter imagens:', error)
    throw error
  }
}

export async function likeImages(id: any): Promise<AxiosResponse<any>> {
  try {
    const response = await api.post(`/Images/${id}/like`)
    return response
  } catch (error) {
    console.error('Erro Like:', error)
    throw error
  }
}
export async function dislikeImages(id: any): Promise<AxiosResponse<any>> {
  try {
    const response = await api.post(`/Images/${id}/dislike`)
    return response
  } catch (error) {
    console.error('Erro Dislike:', error)
    throw error
  }
}

export async function obterHistory(): Promise<AxiosResponse<any>> {
  try {
    const response = await api.get('/Images/history')
    return response
  } catch (error) {
    console.error('Error Historico:', error)
    throw error
  }
}
