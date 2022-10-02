var hiragana = "あいうえおかきくけこがぎぐげごさしすせそざじずぜぞたちつてとだぢづでどなにぬねのはひふへほぱぴぷぺぽばびぶべぼまみむめもやゆよらりるれろわゐゑを";
var hira_n = "ん";
var katakana = "アイウエオカキクケコガギグゲゴサシスセソザジズゼゾタチツテトダヂヅデドナニヌネノハヒフヘホパピプペポバビブベボマミムメモヤユヨラリルレロワヰヱヲ";
var kata_n = "ン";
var hangeul = "아이으에오까끼끄께꼬가기그게고사시스세소자지즈제조타티트테토다디드데도나니느네노하히흐헤호파피프페포바비브베보마미므메모야유요라리르레로와위웨워꺄뀨꾜갸규교샤슈쇼쟈쥬죠탸튜툐댜듀됴냐뉴뇨햐휴효퍄퓨표뱌뷰뵤먀뮤묘";
var hangeul_n = "안인은엔온깐낀끈껜꼰간긴근겐곤산신슨겐손잔진즌젠존탄틴튼텐톤단딘든덴돈난닌는넨논한힌흔헨혼판핀픈펜폰반빈븐벤본만민믄멘몬얀윤욘란린른렌론완윈웬원꺈뀬꾠갼균굔샨슌숀쟌쥰죤탼튠툔댠듄됸냔뉸뇬햔흄횬퍈퓬푠뱐뷴뵨먄뮨묜";

var hiragana_little = "ゃゅょ";
var hiragana_i = "きぎしじちぢにひぴびみり";
var katakana_little = "ャュョ";
var katakana_i = "キギシジチヂニヒピビミリ";
var hangeul_i = "꺄뀨꾜갸규교샤슈쇼쟈쥬죠탸튜툐댜듀됴냐뉴뇨햐휴효퍄퓨표뱌뷰뵤먀뮤묘";
var hangeul_in = "꺈뀬꾠갼균굔샨슌숀쟌쥰죤탼튠툔댠듄됸냔뉸뇬햔흄횬퍈퓬푠뱐뷴뵨먄뮨묜";

function convert(source){
    var result = [];
    for(var i=0; i<source.length; i++){
        if(hiragana_little.indexOf(source[i])!=-1){
            result.pop();
            var last = source[i-1];
            result.push(hangeul_i[hiragana_i.indexOf(last)*3+hiragana_little.indexOf(source[i])]);
            continue;
        };
        if(katakana_little.indexOf(source[i])!=-1){
            result.pop();
            var last = source[i-1];
            result.push(hangeul_i[katakana_i.indexOf(last)*3+katakana_little.indexOf(source[i])]);
            continue;
        }
        if(hiragana.indexOf(source[i])!=-1){
            result.push(hangeul[hiragana.indexOf(source[i])]);
            continue;
        };
        if(katakana.indexOf(source[i])!=-1){
            result.push(hangeul[katakana.indexOf(source[i])]);
            continue;
        };
        if(source[i]==hira_n || source[i]==kata_n){
            var last = result.pop()
            result.push(hangeul_n[hangeul.indexOf(last)]);
            continue;
        };
        if(source[i]=="っ" || source[i]=="ッ") continue; // がっこ→각고的形式未尝不可, 但是工作量过大，故放弃
        result.push(source[i]);
    };
    return result.join("");
};

var input = document.getElementById("input");
var showbox = document.getElementById("showbox");
input.addEventListener("input", ()=>{
    var source = input.innerText;
    var result = convert(source)
    showbox.innerHTML = result;
});