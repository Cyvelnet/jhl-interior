(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{163:function(t,e,a){"use strict";var s=a(40);a.n(s).a},164:function(t,e,a){(t.exports=a(4)(!1)).push([t.i,".aspect-ratio .btn[data-v-e211ac12], .zoom .btn[data-v-e211ac12] {\n  font-size: 13px;\n  font-weight: initial !important;\n}\n.preview[data-v-e211ac12] {\n  overflow: hidden;\n  width: 200px;\n  height: 200px;\n}\n.vm--container[data-v-e211ac12] {\n  z-index: 9999;\n}\n.vue-image-gallery .close-modal[data-v-e211ac12] {\n  transition: all 0.3s ease-in;\n  padding: 3px;\n  font-weight: bold;\n  position: absolute;\n  top: -15px;\n}\n.vue-image-gallery .close-modal[data-v-e211ac12]:hover {\n  color: red;\n  font-size: 150%;\n}\n.vue-image-gallery .card .card-action[data-v-e211ac12] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transition: background-color 0.5s ease-in-out;\n  background-color: transparent;\n  visibility: hidden;\n}\n.vue-image-gallery .card .card-action a[data-v-e211ac12] {\n  display: block;\n  font-size: 12px;\n  color: white;\n  transition: all 0.2s ease-out;\n}\n.vue-image-gallery .card .card-action a[data-v-e211ac12]:hover {\n  color: sandybrown;\n}\n.vue-image-gallery .card .card-action a.remove[data-v-e211ac12]:hover {\n  color: orangered;\n  text-shadow: 1px 2px rgba(205, 92, 92, 0.2) !important;\n}\n.vue-image-gallery .card .card-action a .ik[data-v-e211ac12] {\n  font-size: 16px;\n}\n.vue-image-gallery .card .card-action .action-container[data-v-e211ac12] {\n  margin-top: 5px;\n}\n.vue-image-gallery .card:hover img[data-v-e211ac12] {\n  -webkit-filter: blur(3px);\n          filter: blur(3px);\n}\n.vue-image-gallery .card:hover .card-action[data-v-e211ac12] {\n  visibility: visible;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vue-image-gallery .card:hover .card-action a[data-v-e211ac12] {\n  padding: 8px;\n  visibility: visible;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);\n  transition: all 0.3s ease-in;\n}",""])},360:function(t,e,a){"use strict";a.r(e);var s=a(19),i=a.n(s),r=a(6),o=a(57),n=a(56),l={extends:r.a,data:function(){return{isLoadingCategories:!1,project:{images:{data:[]}},optCategories:[],froalaConfig:{key:"AV:4~?3xROKLJKYHROLDXDR@d2YYGR_Bc1A8@5@4:1B2D2F2F1?1?2A3@1C1",heightMin:300,placeholderText:"Detail information to your authiences",toolbarButtons:{moreText:{buttons:["bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize","textColor","backgroundColor","inlineClass","inlineStyle","clearFormatting"],align:"left",buttonsVisible:3},moreParagraph:{buttons:["alignLeft","alignCenter","formatOLSimple","alignRight","alignJustify","formatOL","formatUL","paragraphFormat","paragraphStyle","lineHeight","outdent","indent","quote"],align:"left",buttonsVisible:3},moreRich:{buttons:["insertLink","insertImage","insertVideo","insertTable","emoticons","fontAwesome","specialCharacters","embedly","insertFile","insertHR"],align:"left",buttonsVisible:3},moreMisc:{buttons:["undo","redo","fullscreen","print","getPDF","spellChecker","selectAll","html","help"],align:"right",buttonsVisible:2}},toolbarButtonsXS:[["bold","italic","underline","alignLeft","alignCenter","alignRight","alignJustify","paragraphFormat","lineHeight","outdent","indent"],["insertLink","fullscreen"]]}}},props:{},methods:{save:function(){var t=this;this.isSaving=!0,axios.put("/api/admin/v1/projects/".concat(this.$route.params.id),this.project).then((function(e){return t.category=e.data.category,t.showSuccess(e.data.message),t.$router.back(),e})).catch((function(e){422===e.response.status&&t.processErrors(e.response.data.errors)})).finally((function(){t.isSaving=!1}))},getCategories:function(){var t=this;this.isLoadingCategories=!0,axios.get("/api/admin/v1/data/categories",{params:{}}).then((function(e){t.optCategories=e.data.data})).finally((function(){t.isLoadingCategories=!1}))},addProjectImage:function(t){this.project.images.data.push(t)},removeImage:function(t){var e=this.project.images.data.find((function(e){return e.file===t.file}));e&&this.project.images.data.splice(this.project.images.data.indexOf(e),1)},updateImageRef:function(t){var e=this.project.images.data.find((function(e){return e.file===t.file}));if(e){var a=JSON.parse(JSON.stringify(e));a.url=t.new_file_url,a.cover_url=t.new_cover_url,a.ext=t.new_ext,a.file=t.new_file,a.filename=t.new_filename,this.project.images.data.splice(this.project.images.data.indexOf(e),1,a)}}},computed:{},components:{VueSelect:i.a,ImageGallery:o.a,SimpleImageUploader:n.a},watch:{},created:function(){},mounted:function(){var t=this;this.getCategories(),this.isLoading=!0,axios.get("/api/admin/v1/projects/".concat(this.$route.params.id),{params:{include:"images,category"}}).then((function(e){t.project=e.data})).finally((function(){t.isLoading=!1}))},beforeDestroy:function(){}},c=(a(25),a(89),a(0)),p=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-header",{attrs:{title:"Edit Project"}}),t._v(" "),a("a",{staticClass:"btn btn-outline-info mb-3",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$router.back()}}},[a("i",{staticClass:"ik ik-chevron-left"}),t._v("\n        Back")]),t._v(" "),a("div",{staticClass:"card"},[a("alert",{attrs:{type:t.serverMessageType,messages:t.serverMessages}}),t._v(" "),a("div",{staticClass:"card-body"},[a("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[t._m(0),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"}},[t._v("Gallery "),a("span",{staticClass:"badge badge-primary badge-pill",staticStyle:{"font-size":"10px",padding:"2px 3px"}},[t._v(t._s(t.project.images.data.length))])])])]),t._v(" "),a("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"home",role:"tabpanel","aria-labelledby":"home-tab"}},[a("div",{staticClass:"mt-3"},[a("ValidationObserver",{ref:"observer",attrs:{tag:"form"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit,i=e.invalid;return[a("form",{on:{submit:function(e){return e.preventDefault(),s(t.save)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("h6",[t._v("Project Information")])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"col-md-8"},[a("ValidationProvider",{attrs:{rules:"required",name:"Project Name"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"form-group"},[a("label",[t._v("Project Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],staticClass:"form-control",class:e.classes,attrs:{type:"text"},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}}),t._v(" "),e.errors.length?a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e.errors[0]))]):t._e()])]}}],null,!0)}),t._v(" "),a("ValidationProvider",{attrs:{rules:"required",name:"Category"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"form-group"},[a("label",[t._v("Category")]),t._v(" "),a("vue-select",{attrs:{options:t.optCategories,label:"name","track-by":"id",searchables:!0,loading:t.isLoadingCategories},model:{value:t.project.category,callback:function(e){t.$set(t.project,"category",e)},expression:"project.category"}}),t._v(" "),e.errors.length?a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e.errors[0]))]):t._e()],1)]}}],null,!0)}),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Description")]),t._v(" "),a("froala",{attrs:{tag:"textarea",config:t.froalaConfig},model:{value:t.project.description,callback:function(e){t.$set(t.project,"description",e)},expression:"project.description"}})],1),t._v(" "),a("ValidationProvider",{attrs:{name:"Highlight"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"form-group"},[a("label",{staticClass:"optional"},[t._v("Highlight")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.project.highlight,expression:"project.highlight"}],staticClass:"form-control",class:e.classes,attrs:{name:"highlight",id:"ta_highlight",placeholder:"Brief description about project ...",rows:"3"},domProps:{value:t.project.highlight},on:{input:function(e){e.target.composing||t.$set(t.project,"highlight",e.target.value)}}}),t._v(" "),e.errors.length?a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e.errors[0]))]):t._e()])]}}],null,!0)}),t._v(" "),a("ValidationProvider",{attrs:{rules:"",name:"Value"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"form-group"},[a("label",{staticClass:"optional"},[t._v("Value")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.value,expression:"project.value"}],staticClass:"form-control",class:e.classes,attrs:{type:"text"},domProps:{value:t.project.value},on:{input:function(e){e.target.composing||t.$set(t.project,"value",e.target.value)}}}),t._v(" "),e.errors.length?a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e.errors[0]))]):t._e()])]}}],null,!0)}),t._v(" "),a("ValidationProvider",{attrs:{rules:"",name:"Location"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"form-group"},[a("label",{staticClass:"optional"},[t._v("Project Location")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.location,expression:"project.location"}],staticClass:"form-control",class:e.classes,attrs:{type:"text"},domProps:{value:t.project.location},on:{input:function(e){e.target.composing||t.$set(t.project,"location",e.target.value)}}}),t._v(" "),e.errors.length?a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e.errors[0]))]):t._e()])]}}],null,!0)}),t._v(" "),a("ValidationProvider",{attrs:{rules:"",name:"Date"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"form-group"},[a("label",{staticClass:"optional"},[t._v("Date")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.date,expression:"project.date"}],staticClass:"form-control",class:e.classes,attrs:{type:"date"},domProps:{value:t.project.date},on:{input:function(e){e.target.composing||t.$set(t.project,"date",e.target.value)}}}),t._v(" "),e.errors.length?a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e.errors[0]))]):t._e()])]}}],null,!0)}),t._v(" "),a("ValidationProvider",{attrs:{rules:"required",name:"Project Progress"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"form-group"},[a("label",[t._v("Project Progress")]),t._v(" "),a("div",[a("div",{staticClass:"custom-control custom-radio custom-control-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.progress,expression:"project.progress"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"rad_progress-ongoing",name:"progress",value:"on-going"},domProps:{checked:t._q(t.project.progress,"on-going")},on:{change:function(e){return t.$set(t.project,"progress","on-going")}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"rad_progress-ongoing"}},[t._v("\n                                                                On Going\n                                                            ")])]),t._v(" "),a("div",{staticClass:"custom-control custom-radio custom-control-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.progress,expression:"project.progress"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"rad_progress-completed",name:"progress",value:"completed"},domProps:{checked:t._q(t.project.progress,"completed")},on:{change:function(e){return t.$set(t.project,"progress","completed")}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"rad_progress-completed"}},[t._v("Completed")])])])])]}}],null,!0)}),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Publish Project")]),t._v(" "),a("div",[a("toggle-button",{attrs:{sync:!0,color:{checked:"#26C281"},width:55,labels:{checked:"Yes",unchecked:"No"},height:25},model:{value:t.project.is_published,callback:function(e){t.$set(t.project,"is_published",e)},expression:"project.is_published"}})],1)])],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("h6",[t._v("Client Information")])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"col-md-8"},[a("ValidationProvider",{attrs:{rules:"required",name:"Client Name"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"form-group"},[a("label",[t._v("Client Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.client_name,expression:"project.client_name"}],staticClass:"form-control",class:e.classes,attrs:{type:"text"},domProps:{value:t.project.client_name},on:{input:function(e){e.target.composing||t.$set(t.project,"client_name",e.target.value)}}}),t._v(" "),e.errors.length?a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e.errors[0]))]):t._e()])]}}],null,!0)}),t._v(" "),a("ValidationProvider",{attrs:{rules:"",name:"Client Website"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"form-group"},[a("label",{staticClass:"optional"},[t._v("Client Website")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.client_website,expression:"project.client_website"}],staticClass:"form-control",class:e.classes,attrs:{type:"text"},domProps:{value:t.project.client_website},on:{input:function(e){e.target.composing||t.$set(t.project,"client_website",e.target.value)}}}),t._v(" "),e.errors.length?a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e.errors[0]))]):t._e()])]}}],null,!0)}),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:i||t.isSaving}},[t.isSaving?a("span",[t._v("Saving...")]):a("span",[t._v("Save")])])],1)])])])]}}])})],1)]),t._v(" "),a("div",{staticClass:"tab-pane fade",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}},[a("div",{staticClass:"mt-3"},[a("ValidationObserver",{ref:"observer",attrs:{tag:"form"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit,i=e.invalid;return[a("form",{on:{submit:function(e){return e.preventDefault(),s(t.save)}}},[a("simple-image-uploader",{attrs:{"upload-url":"/api/admin/v1/projects/images/upload",name:"files"},on:{uploaded:t.addProjectImage}}),t._v(" "),a("image-gallery",{attrs:{images:t.project.images.data},on:{remove:t.removeImage,cropped:t.updateImageRef}}),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:i||t.isSaving}},[t.isSaving?a("span",[t._v("Saving...")]):a("span",[t._v("Save")])])],1)]}}])})],1)])])])],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"}},[this._v("Project Information")])])}],!1,null,null,null);e.default=p.exports},40:function(t,e,a){var s=a(164);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(5)(s,i);s.locals&&(t.exports=s.locals)},56:function(t,e,a){"use strict";var s={data:function(){return{error:null,uploadFileNumber:0,totalUploadedFile:0,totalFailedUpload:0,uploadingIndex:0,uploading:!1}},props:{name:{default:"file"},multiple:{default:!0},uploadUrl:{default:!0,type:String}},methods:{beginUpload:function(){this.uploadingIndex=0,this.totalUploadedFile=0,this.totalFailedUpload=0,this.uploadFileNumber=this.$refs.upload.files.length,this.upload()},upload:function(){var t=this;this.error=null,this.uploading=!0;var e=new FormData;e.append(this.name,this.$refs.upload.files[this.uploadingIndex]),axios.post(this.uploadUrl,e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return t.$emit("uploaded",e.data),t.totalUploadedFile+=1,t.uploadingIndex+=1,t.attemptToUploadNextFile(),e}),(function(e){var a=e.response;if(422===a.status)for(var s in a.data.errors)t.error=a.data.errors[s][0];else void 0!==a.data.message?t.error=a.data.message:t.error="Server Error.";return t.totalFailedUpload+=1,t.uploading=!1,e}))},attemptToUploadNextFile:function(){this.uploadingIndex<this.uploadFileNumber&&0===this.totalFailedUpload?this.upload():this.uploading=!1}},computed:{},components:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){}},i=a(0),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.uploading?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-6"},[a("div",{staticClass:"progress mb-3"},[a("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",class:{"bg-danger":t.totalFailedUpload>0},staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("Uploading ...\n                ")])])])]):a("div",{staticClass:"clearfix"},[a("button",{staticClass:"btn btn-success mb-3",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$refs.upload.click()}}},[t._v("\n            Upload "),a("i",{staticClass:"ik ik-upload-cloud"})])]),t._v(" "),t.error?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-6"},[a("p",{staticClass:"text-danger small text-right",domProps:{textContent:t._s(t.error)}})])]):t._e(),t._v(" "),a("input",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"file",name:t.name,multiple:t.multiple},on:{input:function(e){return e.preventDefault(),t.beginUpload(e)}}})])}),[],!1,null,"1c6bdd37",null);e.a=r.exports},57:function(t,e,a){"use strict";var s=a(90),i={data:function(){return{pImages:this.images,cropping:!1,eventBus:new Vue,ratio:1.5,flippedX:!1,flippedY:!1,editFile:{}}},props:{images:{required:!0,type:Array,default:function(){return[]}}},methods:{beforeModalClose:function(t){this.cropping?t.cancel():this.resetCrop()},resetCrop:function(){this.$refs.cropper.reset(),this.flippedX=!1,this.flippedY=!1,this.ratio=1.5},cropImage:function(){var t=this;this.cropping=!0,this.$refs.cropper.disable(),axios.patch("/api/admin/v1/projects/images/edit",{file:this.editFile.file,cropData:this.$refs.cropper.getData()}).then((function(e){t.$emit("cropped",e.data),setTimeout((function(){t.closeModal()}),100)})).finally((function(){t.cropping=!1,t.$refs.cropper.enable()}))},setRatio:function(t){this.$refs.cropper.setAspectRatio(t),this.ratio=t},rotate:function(t){this.$refs.cropper.rotate(t)},flipX:function(){this.flippedX?this.$refs.cropper.scale(1,this.flippedY?-1:1):this.$refs.cropper.scale(-1,this.flippedY?-1:1),this.flippedX=!this.flippedX},flipY:function(){this.flippedY?this.$refs.cropper.scale(this.flippedX?-1:1,1):this.$refs.cropper.scale(this.flippedX?-1:1,-1),this.flippedY=!this.flippedY},showCrop:function(t){this.editFile=t,this.$modal.show("image-crop-modal")},closeModal:function(){this.$modal.hide("image-crop-modal")},removeImage:function(t){this.$emit("remove",t)}},components:{VueCropper:a.n(s).a},watch:{images:function(t){this.pImages=t}},created:function(){},mounted:function(){},beforeDestroy:function(){this.resetCrop(),this.$refs.cropper.destroy()}},r=(a(165),a(163),a(0)),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-image-gallery"},[t.pImages.length>0?a("div",{staticClass:"row"},t._l(t.pImages,(function(e){return a("div",{staticClass:"col-xl-2 col-lg-3 col-md-4 col-sm-6"},[a("div",{staticClass:"card",staticStyle:{position:"relative"}},[a("img",{staticClass:"card-img-top",attrs:{src:e.cover_url,alt:e.file}}),t._v(" "),a("div",{staticClass:"card-action"},[a("div",{staticClass:"text-right action-container"},[a("a",{staticClass:"remove",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.removeImage(e)}}},[t._v("Remove "),a("span",{staticClass:"ik ik-x"})]),t._v(" "),a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.showCrop({url:e.url,file:e.file})}}},[t._v("Crop\n                            "),a("span",{staticClass:"ik ik-edit"})])])])])])})),0):a("div",[a("p",{staticClass:"mb-3 mt-3"},[t._v("No Image is found in gallery, please upload one or more images.")])]),t._v(" "),a("modal",{attrs:{name:"image-crop-modal",adaptive:!0,resizable:!0,reset:!0,width:1200,height:600},on:{"before-close":t.beforeModalClose}},[a("div",{staticStyle:{padding:"0 25px 0 0"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-10"},[a("div",[t.editFile.url?a("vue-cropper",{ref:"cropper",attrs:{responsive:!0,"initial-aspect-ratio":4/3,"aspect-ratio":t.ratio,"drag-mode":"move","auto-crop-area":.6,center:!0,preview:".preview",src:t.editFile.url}}):t._e()],1)]),t._v(" "),a("div",{staticClass:"col-lg-2 mt-sm-3"},[a("div",{staticClass:" text-right d-lg-block d-md-block d-none",staticStyle:{height:"20px"}},[a("a",{staticClass:"close-modal",attrs:{href:"#",title:"Close",alt:"Close"},on:{click:function(e){return e.preventDefault(),t.closeModal(e)}}},[t._v("X")])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-5 col-md-12"},[a("label",[t._v("\n                                Crop Preview:\n                            ")]),t._v(" "),a("div",{staticClass:"preview img-responsive img-fluid mr-2"})]),t._v(" "),a("div",{staticClass:"mt-3 col-7 col-md-12"},[a("div",{staticClass:"aspect-ratio"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Aspect Ratio: ")]),t._v(" "),a("div",{staticClass:"btn-group btn-group-sm btn-group-toggle"},[a("label",{staticClass:"btn btn-outline-primary",class:{active:t.ratio===4/3}},[a("input",{attrs:{type:"radio",autocomplete:"off",value:"4/3"},on:{click:function(e){return e.preventDefault(),t.setRatio(4/3)}}}),t._v(" 4:3\n                                        ")]),t._v(" "),a("label",{staticClass:"btn btn-outline-primary",class:{active:1.5===t.ratio}},[a("input",{attrs:{type:"radio",autocomplete:"off",value:"3/2"},on:{click:function(e){return e.preventDefault(),t.setRatio(1.5)}}}),t._v(" 3:2\n                                        ")]),t._v(" "),a("label",{staticClass:"btn btn-outline-primary",class:{active:1===t.ratio}},[a("input",{attrs:{type:"radio",autocomplete:"off",value:"1"},on:{click:function(e){return e.preventDefault(),t.setRatio(1)}}}),t._v("\n                                            1:1\n                                        ")]),t._v(" "),a("label",{staticClass:"btn btn-outline-primary",class:{active:!1===t.ratio}},[a("input",{attrs:{type:"radio",autocomplete:"off",value:"null"},on:{click:function(e){return e.preventDefault(),t.setRatio(!1)}}}),t._v(" Free\n                                        ")])])])]),t._v(" "),a("div",{staticClass:"zoom"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Flip: ")]),t._v(" "),a("div",[a("div",{staticClass:"btn-group btn-group-sm"},[a("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return e.preventDefault(),t.flipX(e)}}},[t._v("\n                                                Horizontal\n                                            ")]),t._v(" "),a("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return e.preventDefault(),t.flipY(e)}}},[t._v("Vertical\n                                            ")])])])])]),t._v(" "),a("div",{staticClass:"mt-30"},[a("button",{staticClass:"btn btn-default btn-block",on:{click:function(e){return e.preventDefault(),t.resetCrop(e)}}},[t._v("Reset")]),t._v(" "),t.cropping?a("div",{staticClass:"progress",staticStyle:{height:"20px"}},[a("div",{staticClass:"progress-bar bg-success progress-bar-striped progress-bar-animated",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("Cropping ...\n                                    ")])]):a("button",{staticClass:"btn btn-primary btn-block",on:{click:function(e){return e.preventDefault(),t.cropImage(e)}}},[a("i",{staticClass:"ik ik-crop"}),t._v(" Crop Now\n                                ")])])])])])])])])],1)}),[],!1,null,"e211ac12",null);e.a=o.exports},6:function(t,e,a){"use strict";var s={data:function(){return{pMessages:this.messages}},props:{type:{default:"danger"},messages:{default:function(){return[]}}},computed:{alertClass:function(){return{"alert-success":"success"===this.type,"alert-danger":"danger"===this.type,"alert-warning":"warning"===this.type,"alert-info":"info"===this.type}},title:function(){return"danger"===this.type?"Oops!":"success"===this.type?"Great!":"warning"===this.type?"Snap!":"info"===this.type?"":void 0}},watch:{messages:function(t){this.pMessages=t}}},i=a(0),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.pMessages.length?a("div",{staticClass:"alert",class:t.alertClass},[a("strong",{domProps:{textContent:t._s(t.title)}}),t._v(" "),t.pMessages.length>1?a("ul",t._l(t.pMessages,(function(e){return a("li",{domProps:{innerHTML:t._s(e)}})})),0):t._l(t.pMessages,(function(e){return a("p",{staticStyle:{"font-size":"inherit"},domProps:{innerHTML:t._s(e)}})}))],2):t._e()}),[],!1,null,"494a34d0",null).exports,o={props:{permissions:{required:!0,type:Array}},methods:{can:function(t){return this.permissions.indexOf(t)>=0},canAny:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.some((function(e){return t.permissions.includes(e)}))},cannot:function(t){return 0===this.permissions.indexOf(t)},cannotAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this.permissions.includes(t)}}},n={extends:Object(i.a)(o,void 0,void 0,!1,null,"31519c40",null).exports,data:function(){return{isLoading:!0,isSaving:!1,isUpdating:!1,serverMessageType:"danger",serverMessages:[]}},methods:{resetMessages:function(){this.serverMessages=[]},processErrors:function(t){for(var e in this.resetMessages(),this.serverMessageType="danger",t)this.serverMessages.push(t[e][0]);this.$swal({text:this.serverMessages.join("\r\n"),toast:!0,position:"top-end",icon:"error",timer:5e3,timerProgressBar:!0,showConfirmButton:!1})},showSuccess:function(t){this.resetMessages(),this.serverMessageType="success",this.serverMessages.push(t),this.$swal({text:t,toast:!0,position:"top-end",icon:"success",timer:5e3,timerProgressBar:!0,showConfirmButton:!1})},handleError:function(t){422!==t.response.status?void 0!==t.response.data.message&&(this.resetMessages(),this.serverMessageType="danger",this.serverMessages.push(t.response.data.message),this.$swal({text:t.response.data.message,toast:!0,position:"top-end",icon:"error",showConfirmButton:!1})):this.processErrors(t.response.data.errors)}},computed:{},components:{Alert:r}},l=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,"1dafff83",null);e.a=l.exports}}]);