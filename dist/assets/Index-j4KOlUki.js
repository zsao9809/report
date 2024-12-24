import{u as se,a as le,c as N,g as ne,b as re,r as E,d as h,e as d,o as v,f as J,h as $,t as H,i as a,w as t,j as V,k as m,l as A,m as b,n as ie,U as de,p as Q,F as P,q as ue,E as r,s as me,v as pe,x as _e,y as oe,z as X,A as Y,B as Z,C as ee,D as fe,G as ce,H as ge,I as te,J as ye,K as we,L as ve,R as xe}from"./index-4cp2rmX9.js";import{h as ke,e as ae}from"./reg-Boiy3YJL.js";import{_ as Ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Le={class:"toolbar"},Ve={class:"user"},be={__name:"Header",setup(G){const x=se(),w=le(),_=N(()=>w.state.user.is_have_avatar),M=N(()=>w.state.user.user_id),F=N(()=>w.state.update_avatar);ne().then(p=>{p.data.code==1&&w.commit("setClassList",p.data.subject_list.map(e=>e.subject_name))}),re().then(p=>{p.data.code==1&&(c.user_name=p.data.data.user_name,w.commit("setUser",p.data.data),c.isLogin=!0)});const c=E({user_name:"请登录",isLogin:!1}),u=E({user_name:"",user_password:"",user_pwd:""}),I=p=>{u.user_pwd=u.user_password,p&&p.validate(async e=>{if(e){const n=await ue(u);if(n.data.code==0)return r({message:n.data.msg,type:"error"});c.user_name=n.data.data.user.user_name,c.isLogin=!0,r({message:"登录成功",type:"success",duration:1200,onClose(){l.value=!1}})}else r({message:"格式校验未通过",type:"error"})})},q=(p,e,n)=>{if(!e)return n("请输入用户名");if(!ke(e))return n("用户名必须包含英文");if(!ae(e))return n("用户名只能为英文和数字");if(e.length<3||e.length>8)return n("用户名长度必须在3到8个字符之间");n()},z=(p,e,n)=>{if(!e)return n("请输入密码");if(!ae(e))return n("密码只能为英文和数字");if(e.length<6||e.length>16)return n("密码长度必须在6到16个字符之间");n()},K=(p,e,n)=>{if(!e)return n("请再次输入密码");if(e!=u.user_password)return n("两次密码不一致");n()},T=h(),D=E({user_name:[{validator:q,trigger:"blur"}],user_password:[{validator:z,trigger:"blur"}],user_pwd:[{validator:K,trigger:"blur"}]}),g=p=>{p&&p.validate(async e=>{if(e){const n=await me(u);if(n.data.code==0)return r({message:n.data.msg,type:"error"});r({message:"注册成功",type:"success",duration:1200,onClose(){o.value=!1,I(p)}})}else r({message:"格式校验未通过",type:"error"})})},s=async()=>{if((await pe()).data.code==0)return r({message:"注销失败",type:"error"});_e("token"),w.commit("setUser",{}),w.commit("setFileList",[]),w.commit("setTemplateList",[]),w.commit("setClassList",[]),c.isLogin=!1,c.user_name="请登录",u.user_name="",u.user_password="",u.user_pwd="",r({message:"注销成功",type:"success",duration:1200,onClose(){x.push("/index/main")}})},i=()=>{x.push("/user/index")},l=h(!1),o=h(!1),C=()=>{c.isLogin||(l.value=!l.value,o.value=!1)},k=()=>{o.value=!o.value,l.value=!1};return(p,e)=>{const n=d("el-avatar"),R=d("el-dropdown-item"),j=d("el-dropdown-menu"),O=d("el-dropdown"),U=d("el-input"),L=d("el-form-item"),y=d("el-link"),B=d("el-button"),S=d("el-form"),W=d("el-dialog");return v(),J(P,null,[$("div",Le,[e[15]||(e[15]=$("div",{class:"logo"},[$("h1",null,"实验报告册自动生成系统")],-1)),$("div",Ve,[$("div",{onClick:C,style:{"margin-right":"12px"}},H(c.user_name),1),a(O,{size:"large"},{dropdown:t(()=>[a(j,null,{default:t(()=>[c.isLogin?A("",!0):(v(),V(R,{key:0,onClick:C},{default:t(()=>e[11]||(e[11]=[m("登录账号")])),_:1})),c.isLogin?A("",!0):(v(),V(R,{key:1,onClick:k},{default:t(()=>e[12]||(e[12]=[m("注册账户")])),_:1})),c.isLogin?(v(),V(R,{key:2,onClick:i},{default:t(()=>e[13]||(e[13]=[m("个人主页")])),_:1})):A("",!0),c.isLogin?(v(),V(R,{key:3,onClick:s},{default:t(()=>e[14]||(e[14]=[m("退出登录")])),_:1})):A("",!0)]),_:1})]),default:t(()=>[_.value?(v(),V(n,{key:F.value,src:b(ie).defaults.baseURL+b(de)+M.value+"?v="+new Date().getTime()},null,8,["src"])):(v(),V(n,{key:1,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}))]),_:1})])]),a(W,{modelValue:l.value,"onUpdate:modelValue":e[5]||(e[5]=f=>l.value=f),title:"登录账户",width:"800"},{default:t(()=>[a(S,{ref_key:"ruleFormRef",ref:T,model:u,rules:D,"label-width":"auto"},{default:t(()=>[a(L,{label:"用户名",prop:"user_name"},{default:t(()=>[a(U,{onKeydown:e[0]||(e[0]=Q(f=>I(T.value),["enter"])),modelValue:u.user_name,"onUpdate:modelValue":e[1]||(e[1]=f=>u.user_name=f),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(L,{label:"密码",prop:"user_password"},{default:t(()=>[a(U,{onKeydown:e[2]||(e[2]=Q(f=>I(T.value),["enter"])),modelValue:u.user_password,"onUpdate:modelValue":e[3]||(e[3]=f=>u.user_password=f),modelModifiers:{trim:!0},type:"password","show-password":""},null,8,["modelValue"])]),_:1}),a(L,null,{default:t(()=>[$("span",null,[e[17]||(e[17]=m("没有账户？ ")),a(y,{onClick:k,type:"primary"},{default:t(()=>e[16]||(e[16]=[m("去注册")])),_:1})])]),_:1}),a(L,null,{default:t(()=>[a(B,{onClick:C},{default:t(()=>e[18]||(e[18]=[m("取消")])),_:1}),a(B,{onClick:e[4]||(e[4]=f=>I(T.value)),type:"primary"},{default:t(()=>e[19]||(e[19]=[m("登录")])),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"]),a(W,{modelValue:o.value,"onUpdate:modelValue":e[10]||(e[10]=f=>o.value=f),title:"注册账户",width:"800"},{default:t(()=>[a(S,{ref_key:"ruleFormRef",ref:T,model:u,rules:D,"label-width":"auto"},{default:t(()=>[a(L,{label:"用户名",prop:"user_name"},{default:t(()=>[a(U,{modelValue:u.user_name,"onUpdate:modelValue":e[6]||(e[6]=f=>u.user_name=f),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(L,{label:"密码",prop:"user_password"},{default:t(()=>[a(U,{modelValue:u.user_password,"onUpdate:modelValue":e[7]||(e[7]=f=>u.user_password=f),modelModifiers:{trim:!0},type:"password","show-password":""},null,8,["modelValue"])]),_:1}),a(L,{label:"确认密码",prop:"user_pwd"},{default:t(()=>[a(U,{modelValue:u.user_pwd,"onUpdate:modelValue":e[8]||(e[8]=f=>u.user_pwd=f),modelModifiers:{trim:!0},type:"password","show-password":""},null,8,["modelValue"])]),_:1}),a(L,null,{default:t(()=>[$("span",null,[e[21]||(e[21]=m("已有账户？ ")),a(y,{onClick:C,type:"primary"},{default:t(()=>e[20]||(e[20]=[m("去登录")])),_:1})])]),_:1}),a(L,null,{default:t(()=>[a(B,{onClick:k},{default:t(()=>e[22]||(e[22]=[m("取消")])),_:1}),a(B,{onClick:e[9]||(e[9]=f=>g(T.value)),type:"primary"},{default:t(()=>e[23]||(e[23]=[m("注册")])),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])],64)}}},Te={__name:"Aside",setup(G){const x=se(),w=oe(),_=le(),M=w.params.file_id,F=w.params.template_id;let c=N(()=>_.getters.getFileList),u=N(()=>_.getters.getTemplateList);const I=async()=>{if((await Y()).data.code!=1)return r({message:"请先登录",type:"error"});const s=await Z();if(s.data.code!=1)return r({message:s.data.msg,type:"error"});let i=_.state.file_list;i.push(s.data.data),_.commit("setFileList",i),r({message:s.data.msg,type:"success",duration:1e3,onClose(){x.push(`/report/${s.data.data.file_id}`)}})},q=async g=>{let s=_.state.file_list,i=s.findIndex(l=>l.file_id==g);ee.confirm(`确定要删除${s[i].file_name}吗？`,"删除文件",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{const l=await fe(g);if(l.data.code!=1)return r({message:"删除失败",type:"error"});s.splice(i,1),_.commit("setFileList",s),w.path.split("/")[2]==g&&x.push("/"),r({message:l.data.msg,type:"success"})}).catch(()=>{r({type:"success",message:"已取消删除"})})},z=async g=>{let s=await Z();if(s.data.code!=1)return r({message:"添加文件失败",type:"error"});let i=_.state.file_list;i.push(s.data.data),_.commit("setFileList",i);let l=await ce(g);if(l.data.code!=1)return r({message:"获取文件失败",type:"error"});let o=s.data.data;if(o.file_name=l.data.data.file_name+"副本",o.file_data=JSON.parse(JSON.stringify(l.data.data.file_data)),s=await ge(o.file_id,o),s.data.code!=1)return r({message:"复制文件失败",type:"error"});let C=i.findIndex(k=>k.file_id==o.file_id);i[C]=o,_.commit("setFileList",i),x.push(`/report/${o.file_id}`),r({type:"success",message:"复制成功"})},K=async()=>{if((await Y()).data.code!=1)return r({message:"请先登录",type:"error"});const s=await te();if(s.data.code!=1)return r({message:s.data.msg,type:"error"});let i=_.state.template_list;i.push(s.data.data),_.commit("setTemplateList",i),r({message:s.data.msg,type:"success",duration:1e3,onClose(){x.push(`/template/${s.data.data.template_id}`)}})},T=async g=>{let s=_.state.template_list,i=s.findIndex(l=>l.template_id==g);ee.confirm(`确定要删除${s[i].template_name}吗？`,"删除模板",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{const l=await ye(g);if(l.data.code!=1)return r({message:"删除失败",type:"error"});s.splice(i,1),_.commit("setTemplateList",s),w.path.split("/")[2]==g&&x.push("/"),r({message:l.data.msg,type:"success"})}).catch(()=>{r({type:"success",message:"已取消删除"})})},D=async g=>{let s=await te();if(s.data.code!=1)return r({message:"添加模板失败",type:"error"});let i=_.state.template_list;i.push(s.data.data),_.commit("setTemplateList",i);let l=await we(g);if(l.data.code!=1)return r({message:"获取模板失败",type:"error"});let o=s.data.data;if(o.template_name=l.data.data.template_name+"副本",o.template_data=JSON.parse(JSON.stringify(l.data.data.template_data)),s=await ve(o.template_id,o),s.data.code!=1)return r({message:"复制模板失败",type:"error"});let C=i.findIndex(k=>k.template_id==o.template_id);i[C]=o,_.commit("setTemplateList",i),x.push(`/template/${o.template_id}`),r({type:"success",message:"复制成功"})};return(g,s)=>{const i=d("Document"),l=d("el-icon"),o=d("el-col"),C=d("Setting"),k=d("el-dropdown-item"),p=d("el-dropdown-menu"),e=d("el-dropdown"),n=d("el-menu-item"),R=d("el-button"),j=d("el-sub-menu"),O=d("Memo"),U=d("el-menu"),L=d("el-scrollbar");return v(),V(L,null,{default:t(()=>[a(U,{"default-active":b(M)??b(F),"default-openeds":[`${b(F)?"2":"1"}`],router:!0,"unique-opened":""},{default:t(()=>[a(j,{index:"1"},{title:t(()=>[a(l,null,{default:t(()=>[a(i)]),_:1}),s[0]||(s[0]=m("文件列表 "))]),default:t(()=>[(v(!0),J(P,null,X(b(c),(y,B)=>(v(),V(n,{route:{path:"/report/"+y.file_id,query:{update:!0}},key:y.file_id,index:y.file_id},{default:t(()=>[a(o,{span:20,class:"ellipsis"},{default:t(()=>[m(H(y.file_name),1)]),_:2},1024),a(o,{span:4,style:{display:"flex","align-items":"center"}},{default:t(()=>[a(e,{size:"small"},{dropdown:t(()=>[a(p,null,{default:t(()=>[a(k,{onClick:S=>z(y.file_id)},{default:t(()=>s[1]||(s[1]=[m("复制")])),_:2},1032,["onClick"]),a(k,{onClick:S=>q(y.file_id)},{default:t(()=>s[2]||(s[2]=[m("删除")])),_:2},1032,["onClick"])]),_:2},1024)]),default:t(()=>[a(l,null,{default:t(()=>[a(C)]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1032,["route","index"]))),128)),a(n,{index:"main",style:{"padding-left":"20px",display:"flex","justify-content":"center","align-items":"center"}},{default:t(()=>[a(R,{onClick:I,type:"primary"},{default:t(()=>s[3]||(s[3]=[m("添加文件")])),_:1})]),_:1})]),_:1}),a(j,{index:"2"},{title:t(()=>[a(l,null,{default:t(()=>[a(O)]),_:1}),s[4]||(s[4]=m("我的模板 "))]),default:t(()=>[(v(!0),J(P,null,X(b(u),(y,B)=>(v(),V(n,{route:{path:"/template/"+y.template_id,query:{update:!0}},key:y.template_id,index:y.template_id},{default:t(()=>[a(o,{span:20,class:"ellipsis"},{default:t(()=>[m(H(y.template_name),1)]),_:2},1024),a(o,{span:4,style:{display:"flex","align-items":"center"}},{default:t(()=>[a(e,{size:"small"},{dropdown:t(()=>[a(p,null,{default:t(()=>[a(k,{onClick:S=>D(y.template_id)},{default:t(()=>s[5]||(s[5]=[m("复制")])),_:2},1032,["onClick"]),a(k,{onClick:S=>T(y.template_id)},{default:t(()=>s[6]||(s[6]=[m("删除")])),_:2},1032,["onClick"])]),_:2},1024)]),default:t(()=>[a(l,null,{default:t(()=>[a(C)]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1032,["route","index"]))),128)),a(n,{index:"main",style:{"padding-left":"20px",display:"flex","justify-content":"center","align-items":"center"}},{default:t(()=>[a(R,{onClick:K,type:"primary"},{default:t(()=>s[7]||(s[7]=[m("创建模板")])),_:1})]),_:1})]),_:1})]),_:1},8,["default-active","default-openeds"])]),_:1})}}},Re=Ce(Te,[["__scopeId","data-v-6118ac80"]]),Ue={class:"common-layout"},Be={__name:"Index",setup(G){const x=oe();return(w,_)=>{const M=d("el-header"),F=d("el-aside"),c=d("el-main"),u=d("el-container");return v(),J("div",Ue,[a(u,{style:{height:"100vh"}},{default:t(()=>[a(M,null,{default:t(()=>[a(be)]),_:1}),a(u,null,{default:t(()=>[(v(),V(F,{key:b(x).path,width:"200px"},{default:t(()=>[a(Re)]),_:1})),a(u,null,{default:t(()=>[(v(),V(c,{key:b(x).path},{default:t(()=>[a(b(xe))]),_:1}))]),_:1})]),_:1})]),_:1})])}}};export{Be as default};
