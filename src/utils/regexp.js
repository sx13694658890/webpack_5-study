const { reject } = require("lodash")

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
    return string.replace(excapeRegexp,(match)=>`&${escapeMaps[match]};`)
 }

//  html 逆性转译

const unescape=(string)=>{
    const unescapeMaps={
        "amp":"&",
        "lt":"<",
        "gt":">",
        "quot":'"',
        "#39":"'"
    }
    const unescapeRegexp=/&([^;]+);/g
    return string.replace(unescapeRegexp,(match,unescapeKey)=>{
        return unescapeMaps[unescapeKey]||match
    })
}


//  检查24小时制   
const formatTime=(time)=>{
    const check24TimeRegexp=/^(?:(?:0?|1)\d|2[0-3]:(?:0?|[1-5])\d$/;

}

// 检查日期格式  yyyy-mm-dd、yyyy.mm.dd、yyyy/mm/dd

const formatCheck=(time)=>{
    const checkDateRegexp=/^\d{4}([-\.\/])(?:0[1-9]|1[0-2])\1(?:0[1-9]|[12]\d|3[01]$/
}

// 获取网络图片地址
const matchImgs=(sHtml)=>{
    const imgUrlRegexp=/<img[^>]+src="((?:https?:)?\/\/[^"]+)"[^>]*?>/gi;
    let matchImgUrls=[]
    sHtml.replace(imgUrlRegexp,(match,$1)=>{
        $1 && matchImgUrls.push($1)
    })
    return matchImgUrls
}

// 格式化电话号码
let mobile="18379836654";
const formatMobile=(tel)=>{
    const mobileReg=/(?=(\d{4})+$)/g
    return tel.replace(mobileReg,"-")
}
