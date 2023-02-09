import React from 'react'

import GooglePayButton from '@google-pay/button-react';

export const Payment=()=> {
  return (
    <>
    <div className='text-center'>
    <h3>Order Summary: -</h3>
    <br/>
    <div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item Name</th>
      <th scope="col">Rate</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>abc</td>
      <td>520</td>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>xyz</td>
      <td>150</td>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>pqr</td>
      <td>200</td>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>rew</td>
      <td>150</td>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td colspan="2">Total</td>
      <td>1170</td>
    </tr>
  </tbody>
</table>
</div>

    <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1',
            currencyCode: 'USD',
            countryCode: 'US',
          },
          shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            return { transactionState: 'SUCCESS'}
          }
        }
        onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
            return { }
          }
        }
        existingPaymentMethodRequired='false'
        buttonColor='black'
        buttonType='Buy'
      />
    </div>
    
    </>
  )
}
export default Payment;
