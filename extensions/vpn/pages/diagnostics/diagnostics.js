(()=>{"use strict";var e,t={3032:(e,t,s)=>{var n=s(1743);const i=(e,t)=>{let s=performance.now(),n=self.pageYOffset;return new Promise((i=>{let o=()=>{let r=performance.now()-s;r>t?i():(self.scrollTo(0,n+(e-n)*r/t),requestAnimationFrame(o))};requestAnimationFrame(o)}))};var o=s(5471);let r=("undefined"!=typeof browser?browser:chrome).runtime.connect({name:"diagnostics"}),a=[];r.onMessage.addListener((e=>{a.forEach((t=>{t(e)}))}));const c=e=>{a.push(e)},l=async()=>{let e=await(0,o.A)({type:"Diagnostics.getState"});if(!e)throw new Error("Connection with background failed");return e},d=async()=>{let e=await(0,o.A)({type:"Diagnostics.getSteps"});if(!e)throw new Error("Connection with background failed");return e},p=e=>{a=a.filter((t=>t!==e))},h=e=>(0,o.A)({type:"Diagnostics.start",extensions:e}),u=()=>(0,o.A)({type:"Diagnostics.terminate"}),g=async e=>{if(!await(async()=>"undefined"!=typeof browser?browser.permissions.request({permissions:["management"]}):chrome.permissions.request({permissions:["management"]}))())throw new Error("Not enough permissions");if("undefined"!=typeof browser)return[];const t=(()=>{if("function"==typeof chrome.management.setEnabled)return chrome;const e=document.querySelector("#managementIframe");return e?e.contentWindow.chrome:void 0})();return t?(await Promise.all(e.map((e=>new Promise((s=>{t.management.setEnabled(e,!1,s)}))))),new Promise((e=>{t.management.getAll(e)}))):[]},x="\np, ul, ol, td, th{\n  padding: 0;\n  margin: 0;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nul, ol{\n  list-style: none;\n}\n";var b=s(7130),y=s(1927);s(3894);const f=Object.fromEntries(Object.entries({checkConflictsWithOtherExtensions:"check_conflicts_with_other_extensions",checkBrowsecApi:"check_browsec_api",checkHttpInternetConnection:"check_http_internet_connection",checkHttpInternetConnectionWithBrowsec:"check_http_internet_connection_with_browsec",checkHttpsInternetConnection:"check_https_internet_connection",checkHttpsInternetConnectionWithBrowsec:"check_https_internet_connection_with_browsec",checkProxySettings:"check_proxy_settings",closePage:"close_page",fixIt:"fix_it",running:"running_dots",start:"start",tryAgain:"try_again",weHaveDetectedOtherExtensionsWhichBlockAccess:"we_have_detected_other_extensions_which_block_access",weHaveDetectedOtherExtensionsWhichCanConflict:"we_have_detected_other_extensions_which_can_conflict",youCanEnableTheseExtensionsLater:"you_can_enable_these_extensions_later"}).map((([e,t])=>[e,(0,b.A)(t)]))),v=(e,t,s)=>{if(!t)return!1;let n=e.find((({name:e})=>"proxyApi"===e));return!n||"error"===n.state===("proxyApi"===s)},m=(e,t)=>{var s;switch(null===(s=e.find((({name:e})=>e===t)))||void 0===s?void 0:s.state){case"not started":default:return"";case"in process":return"progress";case"success":return"success";case"partial":return"partial";case"error":return"error"}},w=(e,t)=>{var s;let n=null===(s=e.find((({name:e})=>e===t)))||void 0===s?void 0:s.requests;if(!n)return"";let{success:i,total:o}=n;return i&&i!==o?i+"/"+o:""},k=(e,t)=>{let s=e.find((({name:e})=>e===t));if(!s)throw new Error(`Step ${t} not found!`);return s.state};function $({possibleSteps:e}){return y.qy`
  <style>
  ${x}
  :host{
    display: block;
    font-size: 14px;
  }

  input[type="button"]{
    display: block;
    margin: 0 auto;
    padding: 0px 70px;
    border: 0;
    font-size: 18px;
    height: 48px;
    color: #fff;
    background: var( --brand-green );
    border-radius: 4px;
    cursor: pointer;
  }

  .MainStatus{
    padding-top: 30px;
    text-align: center;
  }
  .MainStatus_Running,
  .MainStatus_Complete{
    display:inline-block;
    vertical-align:top;
    padding: 0px 70px;
    font-size: 18px;
    line-height: 48px;
    background: #e9eaee;
    border-radius: 4px;
  }

  .Steps{
    margin-top: 55px;
    border: 1px solid #a8afb5;
    padding: 40px 30px 40px 20px;
    border-radius: 3px;
    overflow: hidden;
  }
  @media( max-width: 479px ){
    padding: 30px 20px 30px 15px;
  }
  .Steps > .E{
    position: relative;
  }
  .Steps > .E::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }
  .Steps > .E ~ .E{
    border-top: 16px solid transparent;
  }
  .Steps > .E::before{
    content: '';
    display: block;
    background: #e6e6e6;
    position: absolute;
    top: -500px;
    left: 114px;
    width: 2px;
    overflow:hidden;
    font-size:0;
    text-indent:-9999px;
    height:0;
    padding-top: 500px;
  }
  .Steps > .E:first-child::before{
    background: #fff;
    z-index: 2;
  }
  .Steps step-state{
    float: left;
  }
  .Steps_Name{
    font-size: 16px;
    color: #4c4c4c;
    overflow: hidden;
    padding: 5px 0 0 25px;
    line-height: 1.3;
  }
  @media( max-width: 479px ){
    .Steps_Name{
      padding-left: 15px;
    }
  }

  .Extensions{
    padding: 16px 0 0 114px;
    clear: both;
    position: relative;
  }
  .Extensions::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 114px;
    width: 2px;
    padding-top:16px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    background: #e6e6e6;
  }
  .Extensions > .In{
    border-left: 2px solid #e6e6e6;
    background: #f7f7f7;
    padding: 27px 40px;
    border-radius: 0 4px 4px 0;
  }
  .Extensions_Text{
    padding-bottom: 15px;
  }
  .Extensions_Later{
    font-size: 12px;
    color: #808080;
    padding-top: 10px;
  }

  c-summary{
    padding-top: 55px;
  }

  .FinalActionButton{
    text-align: center;
    padding-top: 35px;
  }
  .FinalActionButton input[type="button"]{
    display: block;
    margin: 0 auto;
    border: 0;
    cursor: pointer;
    padding: 0 65px;
    height: 48px;
    color: #fff;
    background: var( --brand-green );
    border-radius: 4px;
    font-size: 18px;
  }

  c-logs{
    padding-top: 50px;
  }
  </style>

  <div class="MainStatus">
  ${(()=>this.noStepsStarted?y.qy`
    <div class="MainStatus_Button">
      <input
        type="button"
        value="${f.start}"
        @click="${this.startDiagnostics}"
      />
    </div>`:"")()}

  ${(()=>this.runningSteps?y.qy`
    <div class="MainStatus_Running">${f.running}</div>`:"")()}

  ${(()=>this.allStepsComplete?y.qy`
    <div class="MainStatus_Button">
      <input
        type="button"
        value="${f.tryAgain}"
        @click="${this.startDiagnostics}"
      />
    </div>`:"")()}
  </div>

  <div class="Steps">
  ${(()=>e.includes("proxyApi")?y.qy`
    <div class="E ${m(this.state,"proxyApi")}">
      <step-state
        .state="${k(this.state,"proxyApi")}"
        .completion="${w(this.state,"proxyApi")}"></step-state>
      <div class="Steps_Name">${f.checkProxySettings}</div>
    ${(()=>v(this.state,this.extensionsVisible,"proxyApi")?y.qy`
      <div class="Extensions"><div class="In">
        <div class="Extensions_Text">${f.weHaveDetectedOtherExtensionsWhichBlockAccess}</div>
        <c-extensions
          .extensions="${this.extensions}"
          @extensions-update="${this.extensionsUpdate}"></c-extensions>
        <div class="Extensions_Later">${f.youCanEnableTheseExtensionsLater}</div>
      </div></div>`:"")()}
    </div>`:"")()}

  ${(()=>e.includes("noProxyExtensions")?y.qy`
    <div class="E ${m(this.state,"noProxyExtensions")}">
      <step-state
        .state="${k(this.state,"noProxyExtensions")}"
        .completion="${w(this.state,"noProxyExtensions")}"></step-state>
      <div class="Steps_Name">${f.checkConflictsWithOtherExtensions}</div>
    ${(()=>v(this.state,this.extensionsVisible,"noProxyExtensions")?y.qy`
      <div class="Extensions"><div class="In">
        <div class="Extensions_Text">${f.weHaveDetectedOtherExtensionsWhichCanConflict}</div>
        <c-extensions
          .extensions="${this.extensions}"
          @extensions-update="${this.extensionsUpdate}"></c-extensions>
        ${"undefined"!=typeof browser?"":y.qy`
          <div class="Extensions_Later">${f.youCanEnableTheseExtensionsLater}</div>`}
      </div></div>`:"")()}
    </div>`:"")()}

  ${(()=>e.includes("httpConnection")?y.qy`
    <div class="E ${m(this.state,"httpConnection")}">
      <step-state
        .state="${k(this.state,"httpConnection")}"
        .completion="${w(this.state,"httpConnection")}"></step-state>
      <div class="Steps_Name">${f.checkHttpInternetConnection}</div>
    </div>`:"")()}

    ${(()=>e.includes("httpsConnection")?y.qy`
    <div class="E ${m(this.state,"httpsConnection")}">
      <step-state
        .state="${k(this.state,"httpsConnection")}"
        .completion="${w(this.state,"httpsConnection")}"></step-state>
      <div class="Steps_Name">${f.checkHttpsInternetConnection}</div>
    </div>`:"")()}

  ${(()=>e.includes("browsecApi")?y.qy`
    <div class="E ${m(this.state,"browsecApi")}">
      <step-state
        .state="${k(this.state,"browsecApi")}"
        .completion="${w(this.state,"browsecApi")}"></step-state>
      <div class="Steps_Name">${f.checkBrowsecApi}</div>
    </div>`:"")()}

  ${(()=>e.includes("httpProxyConnection")?y.qy`
    <div class="E ${m(this.state,"httpProxyConnection")}">
      <step-state
        .state="${k(this.state,"httpProxyConnection")}"
        .completion="${w(this.state,"httpProxyConnection")}"></step-state>
      <div class="Steps_Name">${f.checkHttpInternetConnectionWithBrowsec}</div>
    </div>`:"")()}

  ${(()=>e.includes("httpsProxyConnection")?y.qy`
    <div class="E ${m(this.state,"httpsProxyConnection")}">
      <step-state
        .state="${k(this.state,"httpsProxyConnection")}"
        .completion="${w(this.state,"httpsProxyConnection")}"></step-state>
      <div class="Steps_Name">${f.checkHttpsInternetConnectionWithBrowsec}</div>
    </div>`:"")()}
  </div>

  ${(()=>this.allStepsComplete?y.qy`
    <c-summary
      .fixable="${this.extensionsVisible}"
      .blockedByAntivirus="${this.blockedByAntivirus}"
      .state="${this.state}"></c-summary>
    ${(()=>this.extensionsVisible?y.qy`
    <div class="FinalActionButton">
      <input
        type="button"
        value="${f.fixIt}"
        @click="${this.fixExtensions}"
      />
    </div>`:this.blockedByAntivirus?y.qy`
    <div class="FinalActionButton">
      <input
        type="button"
        value="${f.tryAgain}"
        @click="${this.startDiagnostics}"
      />
    </div>`:y.qy`
      <div class="FinalActionButton">
        <input
          type="button"
          value="${f.closePage}"
          @click="${this.closePage}"
        />
      </div>`)()}
    <c-logs></c-logs>`:"")()}`}const _=(0,b.A)("disable");function S(){return y.qy`
  <style>
  ${x}
  :host{
    display: block;
  }

  input[type="checkbox"]{
    display: block;
    width: 15px;
    height: 15px;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: url( '/images/checkbox.svg#unchecked' ) 0 0 no-repeat;
    background-size: 100% 100%;
    border: 0;
  }
  input[type="checkbox"]:checked{
    background-image: url( '/images/checkbox.svg#checked' );
  }

  .List > table{
    border-collapse: collapse;
    font-size: 14px;
  }
  .List > table > tbody > tr > td ~ td{
    padding-left: 12px;
  }
  .List > table > tbody > tr ~ tr > td{
    padding-top: 10px;
  }

  .List img,
  .Name{
    cursor: default;
  }

  .Icon{
    width:36px;
    height:36px;
    border:1px solid #888;
    border-radius: 50%;
  }

  .Disable{
    padding-top: 15px;
  }
  .Disable input{
    display: block;
    padding: 0 32px;
    height: 36px;
    font-size: 16px;
    background: var( --brand-green );
    border-radius: 4px;
    cursor: pointer;
    border: 0;
    color: #fff;
  }
  </style>

  <div class="List"><table><tbody>
  ${this.views.map(((e,t)=>y.qy`
    <tr>
      <td>
        <input
          type="checkbox"
          id="${e.id}"
          ?checked="${e.checked}"
          @click="${this.clickCheckbox(t)}" />
      </td>
      <td>
        ${(()=>e.icon?"undefined"!=typeof browser?y.qy`
        <div class="Icon"></div>`:y.qy`
        <img
          src="${e.icon}"
          width="38"
          height="38"
          alt=""
          @click="${this.clickCheckbox(t)}"/>`:"")()}
      </td>
      <td><span class="Name" @click="${this.clickCheckbox(t)}">${e.name}</span></td>
    </tr>`))}
  </tbody></table></div>
  ${(()=>"undefined"!=typeof browser?"":y.qy`
  <div class="Disable">
    <input 
      type="button" 
      value="${_}" 
      @click="${this.disableExtensions}"
    />
  </div>`)()}`}class E extends y.WF{render(){return S.call(this)}static get properties(){return{extensions:{type:Array},views:{type:Array}}}constructor(){super(),this.extensions=[],this.views=[]}updated(e){if(e.has("extensions")){var t,s;let e=(null===(t=this.views)||void 0===t||null===(s=t.slice)||void 0===s?void 0:s.call(t))||[];this.views=this.extensions.map((t=>{var s;let n=Object.assign({},t),i=e.find((({id:e})=>e===n.id));return n.checked=null===(s=null==i?void 0:i.checked)||void 0===s||s,n}))}}clickCheckbox(e){return({target:t})=>{let s=Object.assign({},this.views[e]),n=this.views.slice();s.checked=!s.checked,n[e]=s,this.views=n}}async disableExtensions(){if(!this.views.filter((({checked:e})=>e)).length)return;let e=await g(this.views.filter((({checked:e})=>e)).map((({id:e})=>e)));this.extensions=[],this.dispatchEvent(new CustomEvent("extensions-update",{detail:this.extensions})),await u(),h(e)}}customElements.define("c-extensions",E);var C=s(6597);const A=Object.fromEntries(Object.entries({copyToClipboard:"copy_to_clipboard",hideHealthCheckLogs:"hide_health_check_logs",showHealthCheckLogs:"show_health_check_logs"}).map((([e,t])=>[e,(0,b.A)(t)])));function q(){return y.qy`
  <style>
  :host{
    display: block;
  }

  .Show{
    font-size: 14px;
    color: #1c304e;
    text-align: center;
    padding-bottom: 20px;
  }
  .Show > .In{
    position: relative;
    display:inline-block;vertical-align:top;
    padding: 0 24px;
  }
  .Show > .In::after{
    content: '';
    display: block;
    background: url( '/images/diagnostics.svg#document' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 14px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:18px;
    position: absolute;
    top: calc(50% - 9px);
    left: 0;
  }
  .Show > .In > .In{
    display: inline;
    border-bottom: 1px dashed #8d97a6;
    cursor: pointer;
  }
  .Show > .In > .In:hover{
    border-bottom-color: transparent;
  }

  .Textarea textarea{
    display: block;
    box-sizing: border-box;
    background: #f7f7f7;
    border: 1px solid #cccccc;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    padding: 18px;
    overflow: auto;
    width: 100%;
    height: 370px;
    resize: vertical;
    color: #666;
  }

  .Button{
    padding-top: 30px;
    text-align: center;
  }
  .Button input[type="button"]{
    display: block;
    margin: 0 auto;
    border: 0;
    background: #1c304e;
    color: #fff;
    height: 40px;
    padding: 0 22px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>

  <div class="Show">
    <div class="In">
      <div class="In" @click="${this.toggleLog}">
        ${this.visible?A.hideHealthCheckLogs:A.showHealthCheckLogs}
      </div>
    </div>
  </div>

  ${(0,C.z)(this.visible,(()=>y.qy`
    <div class="Textarea">
      <textarea
        name="logs"
        rows="8"
        cols="80"
        .value="${this.text}"
        readonly="readonly"
        spellcheck="false"></textarea>
    </div>
    <div class="Button">
      <input 
        type="button" 
        value="${A.copyToClipboard}" 
        @click="${this.copy}"
      />
    </div>`))}
  `}class B extends y.WF{render(){return q.call(this)}static get properties(){return{visible:{type:Boolean},logLoaded:{type:Boolean},text:{type:String}}}constructor(){super(),this.logLoaded=!1,this.text="",this.visible=!1}async toggleLog(){let e=!this.visible,t=(async()=>{this.logLoaded||(this.logLoaded=!0,this.text=await(0,o.A)({type:"Diagnostics.getLog"})),this.visible=!this.visible})();if(!e)return;await t,await this.requestUpdate();let s=document.body.scrollHeight,n=document.body.offsetHeight;s<=n||(await new Promise((e=>{setTimeout(e,200)})),i(s-n,750))}copy(){var e,t;const s=null===(e=this.shadowRoot)||void 0===e||null===(t=e.querySelector)||void 0===t?void 0:t.call(e,'textarea[name="logs"]');if(!s)throw new Error("textarea element does not exist in Logs");s.select(),document.execCommand("copy"),s.setSelectionRange(0,0),s.blur()}}customElements.define("c-logs",B);function P(){window.language;return y.qy`
  <style>
  :host{
    display: flex;
    width: 140px;
  }

  .Text{
    display: table;
    flex-grow: 0;
    flex-shrink: 0;
    width: 100px;
    height: 30px;
    text-align: right;
    font-size: 12px;
  }
  :host(.skip) .Text{
    color: #999999;
  }
  :host(.progress) .Text{
    color: #1c2f4f;
  }
  :host(.success) .Text{
    color: #3b983f;
  }
  :host(.warning) .Text{
    color: #d8ae04;
  }
  :host(.error) .Text{
    color: #c0362b;
  }
  .Text > .In{
    display: table-cell;
    vertical-align: middle;
    padding-right: 17px;
  }

  .Icon{
    flex-grow: 0;
    flex-shrink: 0;
    width: 30px;
    padding-top:30px;
    overflow:hidden;
    font-size:0;
    text-indent:-9999px;
    height:0;
    background: url( '/images/diagnostics.svg#not_started' ) 0 0 no-repeat;
    background-size: 100% 100%;
    position: relative;
    z-index: 2;
  }
  :host(.skip) .Icon{
    background-image: url( '/images/diagnostics.svg#skipped' );
  }
  :host(.progress) .Icon{
    background-image: url( '/images/diagnostics.svg#waiting' );
  }
  :host(.success) .Icon{
    background-image: url( '/images/diagnostics.svg#success' );
  }
  :host(.warning) .Icon{
    background-image: url( '/images/diagnostics.svg#warning' );
  }
  :host(.error) .Icon{
    background-image: url( '/images/diagnostics.svg#failed' );
  }
  </style>
  
  <div class="Text"><div class="In">${(e=>{switch(e){case"skip":return(0,b.A)("skipped");case"in process":return(0,b.A)("running");case"success":return(0,b.A)("completed");case"warning":return(0,b.A)("warning");case"error":return(0,b.A)("failed");default:return""}})(this.state)} ${this.completion}</div></div>
  <div class="Icon">&nbsp;</div>`}class I extends y.WF{render(){return P.call(this)}static get properties(){return{completion:{type:String},state:{type:String}}}constructor(){super(),this.completion="",this.state="not started"}updated(e){if(e.has("state")){let e=(()=>{switch(this.state){case"skip":return"skip";case"in process":return"progress";case"success":return"success";case"warning":return"warning";case"error":return"error";default:return""}})();["skip","progress","success","warning","error"].forEach((e=>{this.classList.remove(e)})),e&&this.classList.add(e)}}}customElements.define("step-state",I);const{_:L}=self;function T(){const e=window.language;return y.qy`
  <style>
  :host{
    display: block;
    font-size: 16px;
  }

  .Success,
  .Warning,
  .Error{
    display: none;
    text-align: center;
  }

  .Success::before,
  .Warning::before,
  .Error::before{
    content: '';
    display: block;
    background: url( '/images/diagnostics.svg#success' ) 0 0 no-repeat;
    background-size: 100% 100%;
    /*background: url('/images/diagnostics/state_icons_big.png') 0 0 no-repeat;*/
    width: 60px;
    overflow:hidden;font-size:0;text-indent:-9999px;
    height:0;
    padding-top:60px;
    margin: 0 auto;
    border-bottom: 20px solid transparent;
    text-align: left;
  }
  .Warning::before{
    background-image: url( '/images/diagnostics.svg#warning' );
  }
  .Error::before{
    background-image: url( '/images/diagnostics.svg#failed' );
  }

  .Success{
    color: var( --brand-green );
  }
  .Warning{
    color: #d8ad00;
  }
  .Error{
    color: #c0392b;
  }

  :host(.success) .Success{
    display: block;
  }
  :host(.warning) .Warning{
    display: block;
  }
  :host(.error) .Error{
    display: block;
  }
  </style>

  ${(()=>this.fixable?y.qy`
    <div class="Fixable ${L.upperFirst(this.ownState)}">${"en"===e?"Health Check has found issues which can be fixed.":"Диагностика выявила проблемы, которые можно исправить."}</div>`:this.blockedByAntivirus?y.qy`
    <div class="Fixable ${L.upperFirst(this.ownState)}">${"en"===e?y.qy`Browsec connection may be blocked by an <b>antivirus</b>.<br/>Please disabling the antivirus or contact our support team for advice.<br/>Then re-run Health check.`:y.qy`Возможно, работу Browsec блокирует <b>антивирус</b>.<br/>Попробуйте отключить антивирус или обратитесь в нашу службу поддержки за консультацией.<br/>Затем повторите Диагностику.`}</div>`:y.qy`
    <div class="Success">
      ${"en"===e?y.qy`
          No errors were found.<br/>
          Browsec should function normally.`:y.qy`
        Ошибок не обнаружено.<br/>
        Browsec должен работать нормально.`}

    </div>
    <div class="Warning">
      ${"en"===e?y.qy`
          There are errors found during Health Check.<br/>
          You can send Health Check logs to Browsec support to help diagnose these issues.`:y.qy`
        Во время диагностики обнаружены ошибки.<br/>
        Вы можете отправить логи диагностики в службу поддержки Browsec для решения проблемы.`}

    </div>
    <div class="Error">
      ${"en"===e?y.qy`
          There are errors found during Health Check.<br/>
          You can send Health Check logs to Browsec support to help diagnose these issues.`:y.qy`
        Во время диагностики обнаружены ошибки.<br/>
        Вы можете отправить логи диагностики в службу поддержки Browsec для решения проблемы.`}
    </div>`)()}`}class z extends y.WF{render(){return T.call(this)}static get properties(){return{fixable:{type:Boolean},blockedByAntivirus:{type:Boolean},ownState:{type:String},state:{type:Array}}}constructor(){super(),this.fixable=null,this.blockedByAntivirus=null,this.ownState="",this.state=[]}updated(e){if(e.has("ownState")){let t=this.ownState,s=e.get("ownState");s&&this.classList.remove(s),t&&this.classList.add(t)}if(e.has("state")){let e=this.state.map((({state:e})=>e)),t=e.some((e=>!["error","warning","success","skip"].includes(e)))?"":e.some((e=>"error"===e))?"error":e.some((e=>"warning"===e))?"warning":"success";this.ownState!==t&&(this.ownState=t)}}}customElements.define("c-summary",z);const{_:O}=self,H=(()=>{const e="ontouchstart"in window||navigator.maxTouchPoints>0,t=/android [0-9]/i.test(navigator.userAgent)||/iphone;/i.test(navigator.userAgent)||/ipad;/i.test(navigator.userAgent)||/ipod;/i.test(navigator.userAgent);return e&&t})();(async()=>{const e=await d(),t=await l();class s extends y.WF{render(){return $.call(this,{possibleSteps:e})}get extensionsVisible(){return Boolean(this.extensions.length)}get blockedByAntivirus(){if(!this.allStepsComplete)return!1;const e=this.state.find((({name:e})=>"httpProxyConnection"===e));return!(!e||"error"!==e.state)&&(!!e.errors&&e.errors.some((e=>e.includes("forbidden by antivirus"))))}static get properties(){return{noStepsStarted:{type:Boolean},runningSteps:{type:Boolean},allStepsComplete:{type:Boolean,observer:"observeAllStepsComplete"},extensions:{type:Array},extensionsVisible:{type:Boolean},blockedByAntivirus:{type:Boolean},state:{type:Array}}}constructor(){super(),this.allStepsComplete=t.every((({state:e})=>!["not started","in process"].includes(e))),this.extensions=[],this.noStepsStarted=t.every((({state:e})=>"not started"===e)),this.runningSteps=t.some((({state:e})=>["not started","in process"].includes(e)))&&O.uniq(t.map((({state:e})=>e))).length>1,this.state=t}async disconnectedCallback(){super.disconnectedCallback(),await u(),p(this.listener)}async firstUpdated(e){super.firstUpdated(e),this.listener=e=>{e=O.cloneDeep(e),this.state=e,this.extensions=(()=>{let t=["proxyApi","noProxyExtensions"].flatMap((t=>{var s;let n=null===(s=e.find((({name:e})=>e===t)))||void 0===s?void 0:s.extensions;return Array.isArray(n)?[n]:[]})).find((e=>e.length));return t||[]})(),this.noStepsStarted=e.every((({state:e})=>"not started"===e)),this.runningSteps=e.some((({state:e})=>["not started","in process"].includes(e)))&&O.uniq(e.map((({state:e})=>e))).length>1,this.allStepsComplete=e.every((({state:e})=>!["not started","in process"].includes(e)))},c(this.listener)}async updated(e){if(e.has("allStepsComplete")){var t,s,n,o,r,a;let c=this.allStepsComplete,l=e.get("allStepsComplete");if(!c||l)return;await this.requestUpdate();if(!(null===(t=this.shadowRoot)||void 0===t||null===(s=t.querySelector)||void 0===s?void 0:s.call(t,"c-summary")))return;let d=null!==(n=null===(o=document.body)||void 0===o?void 0:o.scrollHeight)&&void 0!==n?n:0,p=null!==(r=null===(a=document.body)||void 0===a?void 0:a.offsetHeight)&&void 0!==r?r:0;if(d<=p)return;i(d-p,750)}}closePage(){self.close(),(0,o.A)({type:"Diagnostics.close"})}extensionsUpdate({detail:e}){this.extensions=e}async fixExtensions(){let e=await g(this.extensions.map((({id:e})=>e)));this.extensions=[],await u(),h(e)}async startDiagnostics(){if(!await("undefined"!=typeof browser?!!H||browser.permissions.request({permissions:["management"]}):chrome.permissions.request({permissions:["management"]})))return;const e=await(async()=>{if("undefined"!=typeof browser){if(H)return;return browser.management.getAll()}const e=await(async()=>{if("function"==typeof chrome.management.getAll)return chrome;const e=document.createElement("iframe");return e.id="managementIframe",await new Promise((t=>{e.addEventListener("load",(()=>{t()})),e.style.cssText="position:absolute;top:-5000px;left:-5000px;width:1px;height:1px;",e.src="/pages/management/management.html",document.body.append(e)})),e.contentWindow.chrome})();return new Promise((t=>{e.management.getAll(t)}))})();await u(),h(e)}}customElements.define("main-block",s)})();const W="undefined"!=typeof browser?browser:chrome;W.runtime.onMessage.addListener(((e,t,s)=>{switch(null==e?void 0:e.type){case"Diagnostics page existence check":return s(!0),!0;case"Diagnostics: close pages":self.close()}}));const D=W.runtime.getURL("/pages/diagnostics/diagnostics.html");if("function"==typeof W.extension.getViews){W.extension.getViews({type:"tab"}).filter((({location:e})=>e.href===D)).length>=2&&self.close()}const j=Object.fromEntries(Object.entries({browsec_health_check:"browsec_healthcheck",description:"browsec_healthcheck_description"}).map((([e,t])=>[e,(0,b.A)(t)])));(async()=>{const e=(0,n.A)();window.language=e,"ru"===e&&document.documentElement.setAttribute("lang","ru");{const e=document.querySelector(".Body");e&&e.append(document.createElement("main-block"))}{const e=document.querySelector(".main");e&&(e.style.cssText="")}const t=document.querySelectorAll("[data-translate-phrase]");for(const e of t){const t=e.dataset.translatePhrase;if(!t)continue;const s=j[t];s&&(e.textContent=s)}})()}},s={};function n(e){var i=s[e];if(void 0!==i)return i.exports;var o=s[e]={id:e,loaded:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,e=[],n.O=(t,s,i,o)=>{if(!s){var r=1/0;for(d=0;d<e.length;d++){for(var[s,i,o]=e[d],a=!0,c=0;c<s.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((e=>n.O[e](s[c])))?s.splice(c--,1):(a=!1,o<r&&(r=o));if(a){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,i,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=157,(()=>{var e={157:0};n.O.j=t=>0===e[t];var t=(t,s)=>{var i,o,[r,a,c]=s,l=0;if(r.some((t=>0!==e[t]))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(c)var d=c(n)}for(t&&t(s);l<r.length;l++)o=r[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},s=self.webpackChunkbrowsec_extension=self.webpackChunkbrowsec_extension||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var i=n.O(void 0,[76],(()=>n(3032)));i=n.O(i)})();