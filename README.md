# jose-jwe

Encrypt a payload with JWE using `node-jose`
Encrypt 🔑 some payload using [_JSON Web Encryption_](https://tools.ietf.org/html/rfc7516) and [`node-jose`](https://github.com/cisco/node-jose) library.

## Install

Requires [node](https://nodejs.org) and [yarn](https://yarnpkg.com)
Install **Node**:

```bash
$ brew install node
```

Install `yarn`:

```bash
$ brew install yarn
```

Install dependencies:

```bash
$ yarn install
```

## Usage

Run the project: it should print in the _console_ 🖥 the encrypted value:

```js
$ yarn start
Encrypt payload
-------------------

Compact:
eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiUlNBLU9BRVAiLCJraWQiOiJyc2EtNW9mV1AwOUNoVzRxb3A2UDQzWGJGN19GMlBuRUo3X2hCaFhBYXJ3UWZuUSJ9.h2Ni-QQ13Cwy1V2NjnxzThEapFGSplsYCPXN7GB7laIUWUUe4LErAqYSDoST7KXwtgYucpl6Qx-x47HkLIGTw65NnjPFrs9WrG7qogAwXhknmqkbfv5Ids4oFEoGGjVpTKi4_MT-lSGFOMIXKRc_AQHBodYJKPdPJy4cEWggrYLGfKI0O1gOrq6DRwo7DLDHtFInNPtuwJX6TWv9mdR1DbyOYXr8lhg9oKJztg3OCurK2EG6cEH-5Rbuhd6F86CUlZvAZar4dMIGmf01ELE-bp_gmMEh4Rr64w_njdUWqt0A-10I25hZBywqpEMsugSDlsh_HPDNRw7JV2FtSYWbiQ.BkJgVjwzYDFKLr5k6YdeEg.XNZIuy0xpxblIjd7h_E7Xy4WndxYTrrW-NGsjKj5b-w.kR943kTPEkCI-zoN0nxO4w

JSON:
{ protected:
   'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiUlNBLU9BRVAiLCJraWQiOiJyc2EtNW9mV1AwOUNoVzRxb3A2UDQzWGJGN19GMlBuRUo3X2hCaFhBYXJ3UWZuUSJ9',
  encrypted_key:
   'nXFMFBbwYP3Ad-uiUAjp8dj-HLNy3f-qWFcJHktJeBiEB4cgDNc-rdunGfG7lU6OhOQsIN_JJVnquDmrLYG83FUFtZuMcXKAWGq7itsm78tufoHSAivIA_opZrtT12kMAtS-aRozL1fZCt4PMtfjyC9gCfvMpoXr_deXHdf0eTHLkx0v8fpKzy4cyY-4bGOeo0iwUYIQoBeosU2437h_aXLQ7c912H1-GLia0Xk-Rxa6m06ch_R4N39zTj_x_qIXAwEgGqw5PL_J6auapWGF_Rh5NravIClO1VMfXyW2HT-LcJevqRsuBBxbqe75Ub3RE_6U8M1TcmLOvvONBNZmCg',
  iv: 'C6IZxtRNvSg_i9OUgoLc1Q',
  ciphertext: 'X3u_D4wnCMtAKtHsSs3GRkhvh3NhkKnNNLNT0tNE_Ag',
  tag: 'Ti8lGQWoWMcdaubvzC6ahg' }


Encrypt Hash Values
-------------------

{ foo:
   'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiUlNBLU9BRVAiLCJraWQiOiJyc2EtNW9mV1AwOUNoVzRxb3A2UDQzWGJGN19GMlBuRUo3X2hCaFhBYXJ3UWZuUSJ9.AtCrcDc6pQaX-O336KDY6bXOnreoejtCjx6agu7imF0apRpBk8s7_ZFyaW-lT8_QIAnKPhG98zYwmM0I5t_q5FVoleQdPkYv7g692FdMOwEVjdhcDmzgweX1xF4xCfCfYq-y94cYwrHK0q2clDvNSuTwwX_zP-1A8h_VqN_6w4_wSOmm3LvDpMyWjJMJTYd19CXTj16f_iFeoV7yPiVRVbx4XuhCBjgSp66D0k7U3oOBIQGGT6Mfg8CAAwYj8bdrQxRrcaBUEF4_exdN4hehamu7Xiv-NZOZrPy_okjZHhpBbfS9Vq0a-AMEpWRSmm3rwmIk18LTW43WQ9m4OT45vA.Kw1kqfm3NnjBfK23Pp1aXw.Ijb-PUzx1-j4U1vhVbVMug.Ni6MDM-9xEQBJreFHdVW8g',
  baz:
   'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiUlNBLU9BRVAiLCJraWQiOiJyc2EtNW9mV1AwOUNoVzRxb3A2UDQzWGJGN19GMlBuRUo3X2hCaFhBYXJ3UWZuUSJ9.Q_GaEJhZkAa75diKLaQs_6qFwU6l6BzIbhngnJYqGZTzEhdxpO6Y0KgrNgbsBUzoVxquYCiEy6B2csD2rxGan6cdwobalfFZQhvRnQ8M1dnFK7b7_GH-CR66sGnqvu7xRR_IcEzBEwbhSLDr0Z_JyRAkPX31lsmsbI94cf4SmLdKV6jR3bKfHSYmK959osJsPNh3hcp5eZym9DUm9iM5ABc7rOeJ7zazaIOJclYBuQxiaoXOQMjRxAOxhazSZhvg_cAz6KQ9Bzsexbv58NuT78U9FeTdo8TsIe5eQ36GgBTgJuxffCUZLESlpLvjOKdDyiSHeNBZyXZM-FuoEtjhjA.xIbXPvHQXWdBI8GAJANFvA.ny9uavG6cFu-H7BpLGhHDg.njcd3AKksaNX-TLE5TeIgA' }
```
