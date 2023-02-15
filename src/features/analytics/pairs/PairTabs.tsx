import Tabs from '../Tabs'

const tabs = [
  {
    name: 'All',
    type: 'all',
    icon: (
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.625 4.25C0.625 3.28859 1.00692 2.36656 1.68674 1.68674C2.36656 1.00692 3.28859 0.625 4.25 0.625H18.75C19.7114 0.625 20.6334 1.00692 21.3133 1.68674C21.9931 2.36656 22.375 3.28859 22.375 4.25V18.75C22.375 19.7114 21.9931 20.6334 21.3133 21.3133C20.6334 21.9931 19.7114 22.375 18.75 22.375H4.25C3.28859 22.375 2.36656 21.9931 1.68674 21.3133C1.00692 20.6334 0.625 19.7114 0.625 18.75V4.25ZM12.7083 19.9583H18.75C19.0705 19.9583 19.3778 19.831 19.6044 19.6044C19.831 19.3778 19.9583 19.0705 19.9583 18.75V12.7083H12.7083V19.9583ZM10.2917 12.7083H3.04167V18.75C3.04167 19.0705 3.16897 19.3778 3.39558 19.6044C3.62219 19.831 3.92953 19.9583 4.25 19.9583H10.2917V12.7083ZM12.7083 10.2917H19.9583V4.25C19.9583 3.92953 19.831 3.62219 19.6044 3.39558C19.3778 3.16897 19.0705 3.04167 18.75 3.04167H12.7083V10.2917ZM10.2917 3.04167H4.25C3.92953 3.04167 3.62219 3.16897 3.39558 3.39558C3.16897 3.62219 3.04167 3.92953 3.04167 4.25V10.2917H10.2917V3.04167Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="-1.04808"
            y1="0.625"
            x2="26.0692"
            y2="7.24706"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0993EC" />
            <stop offset="1" stopColor="#F338C3" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Gainers',
    type: 'gainers',
    icon: (
      <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.1716 10.5001C2.1716 8.28996 3.06423 6.17035 4.65314 4.60755C6.24204 3.04474 8.39706 2.16677 10.6441 2.16677C12.8912 2.16677 15.0462 3.04474 16.6351 4.60755C18.224 6.17035 19.1166 8.28996 19.1166 10.5001C19.1166 12.7102 18.224 14.8299 16.6351 16.3927C15.0462 17.9555 12.8912 18.8334 10.6441 18.8334C8.39706 18.8334 6.24204 17.9555 4.65314 16.3927C3.06423 14.8299 2.1716 12.7102 2.1716 10.5001ZM10.6441 0.0834351C4.7949 0.0834351 0.0534668 4.74698 0.0534668 10.5001C0.0534668 16.2532 4.7949 20.9168 10.6441 20.9168C16.4933 20.9168 21.2347 16.2532 21.2347 10.5001C21.2347 4.74698 16.4933 0.0834351 10.6441 0.0834351ZM8.26863 11.6459C8.08507 11.4368 7.82457 11.308 7.54442 11.2877C7.26428 11.2675 6.98744 11.3576 6.77482 11.5381C6.56219 11.7187 6.43119 11.9749 6.41063 12.2504C6.39008 12.526 6.48165 12.7983 6.6652 13.0074C7.52305 13.9834 8.8257 14.6668 10.6441 14.6668C12.4615 14.6668 13.7652 13.9834 14.623 13.0074C14.8066 12.7983 14.8981 12.526 14.8776 12.2504C14.857 11.9749 14.726 11.7187 14.5134 11.5381C14.3008 11.3576 14.0239 11.2675 13.7438 11.2877C13.4636 11.308 13.2031 11.4368 13.0196 11.6459C12.5758 12.1511 11.8642 12.5834 10.6441 12.5834C9.42407 12.5834 8.71238 12.1511 8.26863 11.6459ZM6.40785 8.41677C6.40785 8.1405 6.51943 7.87555 6.71804 7.6802C6.91666 7.48485 7.18603 7.3751 7.46692 7.3751H7.47751C7.75839 7.3751 8.02776 7.48485 8.22638 7.6802C8.42499 7.87555 8.53657 8.1405 8.53657 8.41677C8.53657 8.69304 8.42499 8.95799 8.22638 9.15334C8.02776 9.34869 7.75839 9.45844 7.47751 9.45844H7.46692C7.18603 9.45844 6.91666 9.34869 6.71804 9.15334C6.51943 8.95799 6.40785 8.69304 6.40785 8.41677ZM13.8213 7.3751C13.5404 7.3751 13.271 7.48485 13.0724 7.6802C12.8738 7.87555 12.7622 8.1405 12.7622 8.41677C12.7622 8.69304 12.8738 8.95799 13.0724 9.15334C13.271 9.34869 13.5404 9.45844 13.8213 9.45844H13.8319C14.1128 9.45844 14.3821 9.34869 14.5808 9.15334C14.7794 8.95799 14.891 8.69304 14.891 8.41677C14.891 8.1405 14.7794 7.87555 14.5808 7.6802C14.3821 7.48485 14.1128 7.3751 13.8319 7.3751H13.8213Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="-1.57586"
            y1="0.0834354"
            x2="24.7824"
            y2="6.62764"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0993EC" />
            <stop offset="1" stopColor="#F338C3" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Losers',
    type: 'losers',
    icon: (
      <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.28581 14.8459C9.08023 14.0648 10.1575 13.626 11.2808 13.626C12.4041 13.626 13.4815 14.0648 14.2759 14.8459H8.28581ZM8.10365 8.41673H8.11424H8.10365ZM14.458 8.41673H14.4686H14.458ZM20.8124 10.5001C20.8124 11.7312 20.5659 12.9503 20.0869 14.0877C19.6079 15.2251 18.9058 16.2586 18.0207 17.1292C17.1356 17.9997 16.0848 18.6903 14.9284 19.1614C13.772 19.6326 12.5325 19.8751 11.2808 19.8751C10.0291 19.8751 8.78969 19.6326 7.63327 19.1614C6.47684 18.6903 5.42609 17.9997 4.541 17.1292C3.65591 16.2586 2.95382 15.2251 2.47482 14.0877C1.99581 12.9503 1.74927 11.7312 1.74927 10.5001C1.74927 8.01366 2.75348 5.62909 4.541 3.87093C6.32852 2.11278 8.75291 1.12506 11.2808 1.12506C13.8088 1.12506 16.2332 2.11278 18.0207 3.87093C19.8082 5.62909 20.8124 8.01366 20.8124 10.5001Z"
          stroke="url(#paint0_linear)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0.282871"
            y1="1.12506"
            x2="24.0053"
            y2="7.01484"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0993EC" />
            <stop offset="1" stopColor="#F338C3" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
]

// @ts-ignore TYPE NEEDS FIXING
export default function PairTabs({ currentType, setType }): JSX.Element {
  return (
    <>
      <Tabs tabs={tabs} currentType={currentType} setType={setType} />
    </>
  )
}
