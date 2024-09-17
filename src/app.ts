import axios from 'axios'
import { dados } from './data'

// const URLPROD = 'https://saudekids-l43dg.ondigitalocean.app/';
const URLLOCAL = 'http://192.168.0.9:8000/' // URL da sua API django local

const api = axios.create({
  baseURL: URLLOCAL,
})

const postDados = async (dado: any): Promise<void> => {
  try {
    const cadastroResponse = await api
      .post('Questao/', dado)
      .then((response) => {
        console.log(
          `status ${response.status} - ${response.data?.id} cadastrado com sucesso!`
        )
      })
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log({ status: error.status, message: error.message })
    }
  }
}

dados.forEach(async (dado) => {
  await postDados(dado)
})

process.exit()
