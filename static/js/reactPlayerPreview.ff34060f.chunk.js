(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[353],{371:(e,t,r)=>{var a,l=r(2897).default,n=Object.create,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,c=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,u=(e,t,r,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let l of s(t))p.call(e,l)||l===r||i(e,l,{get:()=>t[l],enumerable:!(a=o(t,l))||a.enumerable});return e},d=(e,t,r)=>(((e,t,r)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),h={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(h,{default:()=>f}),e.exports=(a=h,u(i({},"__esModule",{value:!0}),a));var m=((e,t,r)=>(r=null!=e?n(c(e)):{},u(!t&&e&&e.__esModule?r:i(r,"default",{value:e,enumerable:!0}),e)))(r(5043));const b="64px",g={};class f extends m.Component{constructor(){super(...arguments),d(this,"mounted",!1),d(this,"state",{image:null}),d(this,"handleKeyPress",(e=>{"Enter"!==e.key&&" "!==e.key||this.props.onClick()}))}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:r}=this.props;e.url===t&&e.light===r||this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage(e){let{url:t,light:r,oEmbedUrl:a}=e;if(!m.default.isValidElement(r))if("string"!==typeof r){if(!g[t])return this.setState({image:null}),window.fetch(a.replace("{url}",t)).then((e=>e.json())).then((e=>{if(e.thumbnail_url&&this.mounted){const r=e.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:r}),g[t]=r}}));this.setState({image:g[t]})}else this.setState({image:r})}render(){const{light:e,onClick:t,playIcon:r,previewTabIndex:a,previewAriaLabel:n}=this.props,{image:i}=this.state,o=m.default.isValidElement(e),s={display:"flex",alignItems:"center",justifyContent:"center"},c={preview:l({width:"100%",height:"100%",backgroundImage:i&&!o?"url(".concat(i,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},s),shadow:l({background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:b,width:b,height:b,position:o?"absolute":void 0},s),playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},p=m.default.createElement("div",{style:c.shadow,className:"react-player__shadow"},m.default.createElement("div",{style:c.playIcon,className:"react-player__play-icon"}));return m.default.createElement("div",l({style:c.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress},n?{"aria-label":n}:{}),o?e:null,r||p)}}}}]);
//# sourceMappingURL=reactPlayerPreview.ff34060f.chunk.js.map