import{d as k,b$ as ie,c as re,o as y,f as L,h as g,i as l,w as a,k as p,t as S,j as R,F as me,z as ue,m as _,c7 as pe,u as ce,y as _e,a as fe,K as ve,E as r,L as ge,C as j,B as xe,H as ye,aY as we,ck as be,e as d,n as M,cl as ke,cj as Ve}from"./index-4cp2rmX9.js";import{_ as Ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Le={class:"work"},Te={class:"header"},he={key:0,class:"text-large font-600 mr-3",style:{display:"flex","align-items":"center"}},Ee={class:"flex items-center"},Ue={class:"main"},Be={style:{"margin-left":"2px"}},Ie={class:"algin_right son_center"},$e={__name:"Index",setup(Se){const V=ce(),T=_e(),u=fe(),c=T.params.template_id,s=k({user_id:"",template_id:c,is_created:!1,is_enable_ai:!1,template_name:"",template_data:{class_name:"",title:"",list:[{title:"",desc:""}]}}),z=T.query.update,h=()=>{ve(c).then(t=>{if(t.data.code!=1)return r({message:"获取模板信息失败",type:"error"});s.value=t.data.data})};if(z)h();else{let t=u.state.template_list.find(e=>e.template_id==c);t?s.value=t:h()}const E=async()=>{if(f.value=60*3,s.value.template_name=="")return r({message:"模板名不能为空",type:"error"});const t=await ge(c,s.value);if(t.data.code!=1)return r({message:t.data.msg,type:"error"});let e=u.state.template_list,o=e.findIndex(i=>i.template_id==c);e[o]=s.value,u.commit("setTemplateList",e),r({message:"保存成功",type:"success"})},F=t=>{let e=u.state.template_list,o=e.findIndex(i=>i.template_id==c);e[o]=s.value,u.commit("setTemplateList",e),V.push(`/template/${c}/${t}`)},O=()=>{j.confirm("确定要清空当前模板吗？","清空模板",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{s.value.template_data={class_name:"",title:"",list:[{title:"",desc:""}]},r({type:"success",message:"清空成功"})}).catch(()=>{r({type:"success",message:"已取消清空"})})},U=(t,e)=>{s.value.template_data.list.splice(e,0,{...t})},A=t=>{s.value.template_data.list.splice(t,1)},N=()=>{V.push("/")},D=()=>{j.confirm("使用测试用例将会清空当前文本，您确定吗？","使用测试用例",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{s.value.template_data.class_name="计算机科学与技术",s.value.template_data.title="计算机科学与技术实验报告",s.value.template_data.list=[{title:"c语言helloworld",desc:"学习c语言printf函数，输出helloworld",paragraphs:[]},{title:"分支语句",desc:"学习c语言if-else分支语句",paragraphs:[]},{title:"循环语句",desc:"学习for循环语句",paragraphs:[]},{title:"函数编程",desc:"学习c语言函数",paragraphs:[]}],s.value.template_data.list.forEach(t=>{t.paragraphs=[{title:"一、实验目的",desc:""},{title:"二、实验仪器设备或材料",desc:""},{title:"三、实验原理",desc:""},{title:"四、实验内容与步骤",desc:""},{title:"五、实验结果与分析",desc:""},{title:"六、结论与体会",desc:""},{title:"七、教师评语",desc:""}]}),r({type:"success",message:"使用成功"})}).catch(()=>{r({type:"success",message:"已取消使用"})})},J=async()=>{let t=await xe();if(t.data.code!=1)return r({message:"添加文件失败",type:"error"});let e=u.state.file_list;e.push(t.data.data),u.commit("setFileList",e);let o=t.data.data;if(o.file_name=s.value.template_name,o.file_data=JSON.parse(JSON.stringify(s.value.template_data)),t=await ye(o.file_id,o),t.data.code!=1)return r({message:"创建文件失败",type:"error"});let i=e.findIndex(m=>m.file_id==o.file_id);e[i]=o,u.commit("setFileList",e),V.push(`/report/${o.file_id}`),r({type:"success",message:"创建成功"})},C=k(!1),B=k(),P=()=>{C.value=!0,we(()=>{B.value.focus()})},H=()=>{C.value=!1};let f=k(60*3);setInterval(()=>f.value--,1e3),ie(f,(t,e)=>t==0&&E());let q=re(()=>{const t=Math.floor(f.value/60),e=f.value%60,o=String(t).padStart(2,"0"),i=String(e).padStart(2,"0");return`${o}:${i}`});const K=t=>{const e=["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],o=t.name.slice((t.name.lastIndexOf(".")-1>>>0)+2).toLowerCase();return!e.includes(t.type)&&o!=="json"?(r.error("请选择Excel或JSON格式文件"),!1):t.size/1024/1024>10?(r.error("文件不能大于10MB"),!1):!0},X=t=>{if(t.code!=1)return r({message:t.msg,type:"error"});s.value.template_data=t.template.template_data;let e=u.state.template_list,o=e.findIndex(i=>i.template_id==c);e[o]=s.value,u.commit("setTemplateList",e),f.value=60*3,r({message:t.msg,type:"success"})},Y=t=>{r({message:t.msg,type:"error"})},I=t=>{be(c,t).then(e=>{const o=window.URL.createObjectURL(new Blob([e.data])),i=document.createElement("a");i.href=o;let m=s.value.template_name+".xlsx";t=="json"&&(m=s.value.template_name+".json"),i.setAttribute("download",m),document.body.appendChild(i),i.click(),i.remove(),window.URL.revokeObjectURL(o)}).catch(e=>r({message:e,type:"error"}))};return(t,e)=>{const o=d("Edit"),i=d("el-icon"),m=d("el-button"),w=d("el-input"),G=d("el-page-header"),Q=d("el-option"),W=d("el-select"),x=d("el-form-item"),b=d("el-table-column"),Z=d("el-popconfirm"),ee=d("el-table"),te=d("View"),le=d("el-link"),ae=d("el-tooltip"),se=d("el-upload"),$=d("el-dropdown-item"),oe=d("el-dropdown-menu"),ne=d("el-dropdown"),de=d("el-form");return y(),L("div",Le,[g("div",Te,[l(G,{onBack:N,title:"模板",icon:null},{content:a(()=>[C.value?(y(),R(w,{key:1,onBlur:H,ref_key:"refInput",ref:B,modelValue:s.value.template_name,"onUpdate:modelValue":e[0]||(e[0]=n=>s.value.template_name=n),modelModifiers:{trim:!0}},null,8,["modelValue"])):(y(),L("span",he,[p(S(s.value.template_name)+" ",1),l(m,{onClick:P,text:""},{default:a(()=>[l(i,null,{default:a(()=>[l(o)]),_:1})]),_:1})]))]),extra:a(()=>[g("div",Ee,[l(m,{onClick:D,type:"primary",class:"ml-2"},{default:a(()=>e[7]||(e[7]=[p("测试用例")])),_:1}),l(m,{onClick:O,type:"danger"},{default:a(()=>e[8]||(e[8]=[p("清空")])),_:1})])]),_:1})]),g("div",Ue,[l(de,{model:s.value.template_data,"label-width":"auto"},{default:a(()=>[l(x,{label:"课程名称"},{default:a(()=>[l(W,{modelValue:s.value.template_data.class_name,"onUpdate:modelValue":e[1]||(e[1]=n=>s.value.template_data.class_name=n),placeholder:"请选择"},{default:a(()=>[(y(!0),L(me,null,ue(_(u).state.class_list,n=>(y(),R(Q,{label:n,value:n},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])]),_:1}),l(x,{label:"报告册标题"},{default:a(()=>[l(w,{modelValue:s.value.template_data.title,"onUpdate:modelValue":e[2]||(e[2]=n=>s.value.template_data.title=n),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),l(x,{label:"详细设计"},{default:a(()=>[l(ee,{data:s.value.template_data.list,"max-height":"386",border:!0},{default:a(()=>[l(b,{type:"index",align:"center"}),l(b,{label:"实验标题",align:"center"},{default:a(n=>[l(w,{modelValue:n.row.title,"onUpdate:modelValue":v=>n.row.title=v},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(b,{label:"实验简介",align:"center"},{default:a(n=>[l(w,{modelValue:n.row.desc,"onUpdate:modelValue":v=>n.row.desc=v,autosize:{minRows:1,maxRows:4},type:"textarea"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(b,{label:"操作",align:"center"},{default:a(n=>[l(m,{onClick:v=>F(n.$index),size:"small"},{default:a(()=>e[9]||(e[9]=[p("编辑详情")])),_:2},1032,["onClick"]),l(m,{onClick:v=>U(n.row,n.$index),size:"small"},{default:a(()=>e[10]||(e[10]=[p("复制")])),_:2},1032,["onClick"]),l(Z,{onConfirm:v=>A(n.$index),title:"确认要删除吗？","confirm-button-text":"确认","cancel-button-text":"取消"},{reference:a(()=>[l(m,{size:"small",type:"danger"},{default:a(()=>e[11]||(e[11]=[p("删除")])),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])]),_:1}),l(x,null,{default:a(()=>[l(m,{onClick:e[3]||(e[3]=n=>U({title:"",desc:""},s.value.template_data.list.length))},{default:a(()=>e[12]||(e[12]=[p("添加一项")])),_:1}),l(se,{class:"upload-button",action:_(M).defaults.baseURL+_(ke)+_(c),headers:{Authorization:"Bearer "+_(u).state.token},"on-success":X,"on-error":Y,"before-upload":K,accept:".xlsx, .json","show-file-list":!1},{default:a(()=>[l(m,null,{default:a(()=>[e[13]||(e[13]=p(" 导入文件 ")),l(ae,{content:"示例文件",placement:"top"},{default:a(()=>[l(le,{href:_(M).defaults.baseURL+_(Ve),onClick:e[4]||(e[4]=pe(()=>{},["stop"])),type:"info",style:{"margin-left":"3px"}},{default:a(()=>[l(i,null,{default:a(()=>[l(te)]),_:1})]),_:1},8,["href"])]),_:1})]),_:1})]),_:1},8,["action","headers"])]),_:1}),l(x,null,{default:a(()=>[l(m,{onClick:E},{default:a(()=>[e[14]||(e[14]=g("span",null,"保存",-1)),g("span",Be,S(_(q)),1)]),_:1}),l(m,{onClick:J,type:"primary"},{default:a(()=>e[15]||(e[15]=[p("创建文件")])),_:1}),g("div",Ie,[l(ne,{size:"large"},{dropdown:a(()=>[l(oe,null,{default:a(()=>[l($,{onClick:e[5]||(e[5]=n=>I("execl"))},{default:a(()=>e[17]||(e[17]=[p("Excel")])),_:1}),l($,{onClick:e[6]||(e[6]=n=>I("json"))},{default:a(()=>e[18]||(e[18]=[p("json")])),_:1})]),_:1})]),default:a(()=>[l(m,null,{default:a(()=>e[16]||(e[16]=[p("导出")])),_:1})]),_:1})])]),_:1})]),_:1},8,["model"])])])}}},Me=Ce($e,[["__scopeId","data-v-58336509"]]);export{Me as default};
