import React from 'react'
import { useActions } from 'easy-peasy'

export default function Header({ route }) {
  const { closeModal, goToCart, goToShipping } = useActions(
    ({ modal }) => modal
  )

  const handleClick = () => {
    switch (route) {
      case 'billing':
        return goToShipping()

      case 'shipping':
        return goToCart()

      default:
        return closeModal()
    }
  }

  return (
    <header className="relative">
      <button onClick={handleClick} className="shopkit-btn">
        {route === 'shipping' || route === 'billing' ? (
          <svg
            className="shopkit-fill-current shopkit-w-3 shopkit-h-3"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <defs>
              <path
                id="back-a"
                d="M12.6560648,15.0712296 L21.5802486,15.0712296 C22.0902152,15.0712296 22.5036248,15.4869503 22.5036248,15.9997679 C22.5036248,16.5125854 22.0902152,16.9283061 21.5802486,16.9283061 L12.6556031,16.9283061 L16.619888,20.914753 C16.7999464,21.095818 16.8904372,21.3335238 16.8904372,21.5712296 C16.8904372,21.8089354 16.7999464,22.0466412 16.619888,22.2277062 C16.2588479,22.5907646 15.6752742,22.5907646 15.3142341,22.2277062 L9.7686332,16.6511031 C9.4104556,16.2909231 9.4104556,15.7090769 9.7686332,15.3488969 L15.3142341,9.77229385 C15.6752742,9.40923538 16.2588479,9.40923538 16.619888,9.77229385 C16.9809281,10.1353523 16.9809281,10.7221885 16.619888,11.085247 L12.6560648,15.0712296 Z"
              />
            </defs>
            <use
              fillRule="evenodd"
              transform="translate(-9 -9)"
              xlinkHref="#back-a"
            />
          </svg>
        ) : (
          <svg
            className="shopkit-fill-current shopkit-w-3 shopkit-h-3"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="10"
            height="10"
            viewBox="0 0 10 10"
          >
            <defs>
              <path
                id="cross2-a"
                d="M16,14.5857864 L19.2928932,11.2928932 C19.6834175,10.9023689 20.3165825,10.9023689 20.7071068,11.2928932 C21.0976311,11.6834175 21.0976311,12.3165825 20.7071068,12.7071068 L17.4142136,16 L20.7071068,19.2928932 C21.0976311,19.6834175 21.0976311,20.3165825 20.7071068,20.7071068 C20.3165825,21.0976311 19.6834175,21.0976311 19.2928932,20.7071068 L16,17.4142136 L12.7071068,20.7071068 C12.3165825,21.0976311 11.6834175,21.0976311 11.2928932,20.7071068 C10.9023689,20.3165825 10.9023689,19.6834175 11.2928932,19.2928932 L14.5857864,16 L11.2928932,12.7071068 C10.9023689,12.3165825 10.9023689,11.6834175 11.2928932,11.2928932 C11.6834175,10.9023689 12.3165825,10.9023689 12.7071068,11.2928932 L16,14.5857864 Z"
              />
            </defs>
            <use
              fillRule="evenodd"
              transform="translate(-11 -11)"
              xlinkHref="#cross2-a"
            />
          </svg>
        )}
      </button>

      {/* <button onClick={goToCart}>Cart ({count})</button>
            <button onClick={goToOrders}>Previous Orders</button> */}
    </header>
  )
}