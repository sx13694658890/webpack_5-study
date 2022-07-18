//  千位格式   1234567=>  123,456,789
const  formatMoney=(money)=>{
    return money.replace(new RegExp(`(?!^)(?=(\\d{3})+${money.includes(".")?'\\.':"$"})`,"g"),",")
}

// 解析url参数

const formatUrl=(url="http://qianlongo.github.io/vue-demos/dist/index.html?name=fatfish&age=100#/home",name)=>{
        const queryNameRegex=new RegExp(`[?&]${name}=([^&]*)(&|$)`)
        const queryNameMatch=window.location.search.match(queryNameRegex)
        return queryNameMatch?decodeURIComponent(queryNameMatch[1]):""
}

// 驼峰式字符串   camelCase
 const camelCase=(string)=>{
    const camelCaseRegex=/[-_\s]+(.)?/g;
    return string.replace(camelCaseRegex,(match,char)=>{
        return char? char.toUpperCase():""
    })
 }

 //  小写转大写
 const   capitalize=(string)=>{
    const capitalizeRegix=/(?:^|\s+)\w/g;
    return string.toLowerCase().replace(capitalizeRegix,(match)=>{
        return match.toUpperCase()
    })
 }


 //  实现trim()

 const trim1=(string)=>{
    return string.replace(/^\s*|\s*$/g,"");
 }

 // HTML 转译   防止xss 攻击方法之一进行HTML转译
 const excape=(string)=>{
    const escapeMaps={
        "&":"amp",
        "<":"lt",
        ">":"gt",
        '"':"quot",
        "'":"#39"
    }
    const excapeRegexp=new RegExp(`[${Object.keys(escapeMaps).join('')}]`,"g")
 }

