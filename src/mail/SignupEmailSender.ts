import sendEmail from './ses';

interface Props {
  userEmail: string;
  token: string;
}
export default function SignupEmailSender({ userEmail, token }: Props) {
  const fromEmail = 'bestwing@mentorey.awsapps.com';
  // const fromEmail = 'noreply@mentorey.co'; // You can register it on AWS Workmail
  const toEmail = userEmail;
  const subject = 'Welcome to Mentorey';
  const content = `<!DOCTYPE html>
  <html
    lang="en"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:v="urn:schemas-microsoft-com:vml"
  >
    <head>
      <title></title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <!--[if mso
        ]><xml
          ><o:OfficeDocumentSettings
            ><o:PixelsPerInch>96</o:PixelsPerInch
            ><o:AllowPNG /></o:OfficeDocumentSettings></xml
      ><![endif]-->
      <style>
        * {
          box-sizing: border-box;
        }
  
        body {
          margin: 0;
          padding: 0;
        }
  
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
  
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
  
        p {
          line-height: inherit;
        }
  
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
  
        .image_block img + div {
          display: none;
        }
  
        @media (max-width: 700px) {
          .desktop_hide table.icons-inner,
          .social_block.desktop_hide .social-table {
            display: inline-block !important;
          }
  
          .icons-inner {
            text-align: center;
          }
  
          .icons-inner td {
            margin: 0 auto;
          }
  
          .mobile_hide {
            display: none;
          }
  
          .row-content {
            width: 100% !important;
          }
  
          .stack .column {
            width: 100%;
            display: block;
          }
  
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }
  
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
  
          .row-1 .column-1 .block-1.spacer_block,
          .row-5 .column-3 .block-1.spacer_block {
            height: 30px !important;
          }
  
          .row-5 .column-1 .block-1.spacer_block {
            height: 20px !important;
          }
  
          .row-5 .column-2 .block-1.paragraph_block td.pad > div {
            text-align: left !important;
          }
  
          .row-5 .column-2 .block-1.paragraph_block td.pad {
            padding: 10px 15px 10px 30px !important;
          }
        }
      </style>
    </head>
    <body
      style="
        background-color: #6d8198;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
      "
    >
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="nl-container"
        role="presentation"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          background-color: #6d8198;
        "
        width="100%"
      >
        <tbody>
          <tr>
            <td>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-1"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          background-color: #d6f0ff;
                          color: #000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 30px;
                                  line-height: 30px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="image_block block-2"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad" style="width: 100%">
                                    <div
                                      align="center"
                                      class="alignment"
                                      style="line-height: 10px"
                                    >
                                      <img
                                        src="https://mentorey.s3.eu-central-1.amazonaws.com/public_images/logo.svg"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          max-width: 300px;
                                          width: 100%;
                                        "
                                        width="300"
                                      />
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <div
                                class="spacer_block block-3"
                                style="
                                  height: 40px;
                                  line-height: 40px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-2"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          background-color: #d6f0ff;
                          color: #000;
                          border-radius: 0;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #259adc;
                                        direction: ltr;
                                        font-family: Helvetica Neue, Helvetica,
                                          Arial, sans-serif;
                                        font-size: 40px;
                                        font-weight: 700;
                                        letter-spacing: 0px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 48px;
                                      "
                                    >
                                      <p style="margin: 0">
                                        It’s time to start your journey!
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-3"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          background-color: #259adc;
                          border-radius: 0;
                          color: #000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-bottom: 20px;
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      padding-top: 20px;
                                    "
                                  >
                                    <div
                                      style="
                                        color: #ffffff;
                                        direction: ltr;
                                        font-family: Helvetica Neue, Helvetica,
                                          Arial, sans-serif;
                                        font-size: 36px;
                                        font-weight: 400;
                                        letter-spacing: 0px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 43.199999999999996px;
                                      "
                                    >
                                      <p style="margin: 0">
                                        Join to 2K Happy Clients
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-4"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          background-color: #fff;
                          border-radius: 0;
                          color: #000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 50px;
                                  line-height: 50px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="heading_block block-2"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-bottom: 10px;
                                      padding-left: 30px;
                                      padding-right: 10px;
                                      padding-top: 10px;
                                      text-align: center;
                                      width: 100%;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        color: #6d8198;
                                        direction: ltr;
                                        font-family: 'Helvetica Neue', Helvetica,
                                          Arial, sans-serif;
                                        font-size: 36px;
                                        font-weight: 400;
                                        letter-spacing: normal;
                                        line-height: 120%;
                                        text-align: center;
                                        margin-top: 0;
                                        margin-bottom: 0;
                                      "
                                    >
                                      <span class="tinyMce-placeholder"
                                        >Confirm </span
                                      ><span class="tinyMce-placeholder"
                                        >Your Subscription</span
                                      >
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-5"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          background-color: #fff;
                          border-radius: 0;
                          color: #000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="16.666666666666668%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 1px;
                                  line-height: 1px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                            <td
                              class="column column-2"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="66.66666666666667%"
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-bottom: 30px;
                                      padding-left: 25px;
                                      padding-right: 25px;
                                    "
                                  >
                                    <div
                                      style="
                                        color: #6d8198;
                                        direction: ltr;
                                        font-family: Helvetica Neue, Helvetica,
                                          Arial, sans-serif;
                                        font-size: 16px;
                                        font-weight: 400;
                                        letter-spacing: 0px;
                                        line-height: 150%;
                                        text-align: left;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <p style="margin: 0">
                                        Your verification code is ${token}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              class="column column-3"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="16.666666666666668%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 1px;
                                  line-height: 1px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-6"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          background-color: #fff;
                          border-radius: 0;
                          color: #000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 30px;
                                  line-height: 30px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-7"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          background-color: #fff;
                          border-radius: 0;
                          color: #000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="image_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad" style="width: 100%">
                                    <div
                                      align="center"
                                      class="alignment"
                                      style="line-height: 10px"
                                    >
                                      <img
                                        src="images/wave680.png"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          max-width: 680px;
                                          width: 100%;
                                        "
                                        width="680"
                                      />
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-8"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          background-color: #259adc;
                          border-radius: 0;
                          color: #000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 30px;
                                  line-height: 30px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="social_block block-2"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-bottom: 10px;
                                      padding-left: 35px;
                                      padding-right: 10px;
                                      padding-top: 10px;
                                      text-align: center;
                                    "
                                  >
                                    <div align="center" class="alignment">
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="social-table"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          display: inline-block;
                                        "
                                        width="144px"
                                      >
                                        <tr>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="https://www.facebook.com/"
                                              target="_blank"
                                              ><img
                                                alt="Facebook"
                                                height="32"
                                                src="https://mentorey.s3.eu-central-1.amazonaws.com/public_images/facebook2x.png"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                                title="facebook"
                                                width="32"
                                            /></a>
                                          </td>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="https://www.twitter.com/"
                                              target="_blank"
                                              ><img
                                                alt="Twitter"
                                                height="32"
                                                src="https://mentorey.s3.eu-central-1.amazonaws.com/public_images/twitter2x.png"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                                title="twitter"
                                                width="32"
                                            /></a>
                                          </td>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="https://www.linkedin.com/"
                                              target="_blank"
                                              ><img
                                                alt="Linkedin"
                                                height="32"
                                                src="https://mentorey.s3.eu-central-1.amazonaws.com/public_images/linkedin2x.png"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                                title="linkedin"
                                                width="32"
                                            /></a>
                                          </td>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="https://www.instagram.com/"
                                              target="_blank"
                                              ><img
                                                alt="Instagram"
                                                height="32"
                                                src="https://mentorey.s3.eu-central-1.amazonaws.com/public_images/instagram2x.png"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                                title="instagram"
                                                width="32"
                                            /></a>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="paragraph_block block-3"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-bottom: 10px;
                                      padding-left: 35px;
                                      padding-right: 20px;
                                      padding-top: 10px;
                                    "
                                  >
                                    <div
                                      style="
                                        color: #ffffff;
                                        direction: ltr;
                                        font-family: Helvetica Neue, Helvetica,
                                          Arial, sans-serif;
                                        font-size: 15px;
                                        font-weight: 400;
                                        letter-spacing: 0px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 18px;
                                      "
                                    >
                                      <p style="margin: 0">
                                        Mentorey.co<br /><br />Questions? Emails
                                        us at support@mentorey.co
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <div
                                class="spacer_block block-4"
                                style="
                                  height: 60px;
                                  line-height: 60px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End -->
    </body>
  </html>
  `;

  sendEmail({ fromEmail, toEmail, subject, content });
}
