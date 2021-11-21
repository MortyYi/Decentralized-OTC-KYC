import { Interface } from '@ethersproject/abi'
import KYC_ABI from './kyc.json'

const KYC_INTERFACE = new Interface(KYC_ABI)


const KYC_ADDRESS = '0x78547FF223A9Bd56cc7b05da920504910389dF6f'

export default KYC_INTERFACE
export { KYC_ABI, KYC_ADDRESS }
