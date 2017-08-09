/*
 * @author 백발의 개발
 */
AtoH = {};

(function()
{
	var KEY_MAP = {};
	KEY_MAP["a"] = 'ㅁ';
	KEY_MAP["b"] = 'ㅠ';
	KEY_MAP["c"] = 'ㅊ';
	KEY_MAP["d"] = 'ㅇ';
	KEY_MAP["e"] = 'ㄷ';
	KEY_MAP["f"] = 'ㄹ';
	KEY_MAP["g"] = 'ㅎ';
	KEY_MAP["h"] = 'ㅗ';
	KEY_MAP["i"] = 'ㅑ';
	KEY_MAP["j"] = 'ㅓ';
	KEY_MAP["k"] = 'ㅏ';
	KEY_MAP["l"] = 'ㅣ';
	KEY_MAP["m"] = 'ㅡ';
	KEY_MAP["n"] = 'ㅜ';
	KEY_MAP["o"] = 'ㅐ';
	KEY_MAP["p"] = 'ㅔ';
	KEY_MAP["q"] = 'ㅂ';
	KEY_MAP["r"] = 'ㄱ';
	KEY_MAP["s"] = 'ㄴ';
	KEY_MAP["t"] = 'ㅅ';
	KEY_MAP["u"] = 'ㅕ';
	KEY_MAP["v"] = 'ㅍ';
	KEY_MAP["w"] = 'ㅈ';
	KEY_MAP["x"] = 'ㅌ';
	KEY_MAP["y"] = 'ㅛ';
	KEY_MAP["z"] = 'ㅋ';
	KEY_MAP["A"] = 'ㅁ';
	KEY_MAP["B"] = 'ㅠ';
	KEY_MAP["C"] = 'ㅊ';
	KEY_MAP["D"] = 'ㅇ';
	KEY_MAP["E"] = 'ㄸ';
	KEY_MAP["F"] = 'ㄹ';
	KEY_MAP["G"] = 'ㅎ';
	KEY_MAP["H"] = 'ㅗ';
	KEY_MAP["I"] = 'ㅑ';
	KEY_MAP["J"] = 'ㅓ';
	KEY_MAP["K"] = 'ㅏ';
	KEY_MAP["L"] = 'ㅣ';
	KEY_MAP["M"] = 'ㅡ';
	KEY_MAP["N"] = 'ㅜ';
	KEY_MAP["O"] = 'ㅒ';
	KEY_MAP["P"] = 'ㅖ';
	KEY_MAP["Q"] = 'ㅃ';
	KEY_MAP["R"] = 'ㄲ';
	KEY_MAP["S"] = 'ㄴ';
	KEY_MAP["T"] = 'ㅆ';
	KEY_MAP["U"] = 'ㅕ';
	KEY_MAP["V"] = 'ㅍ';
	KEY_MAP["W"] = 'ㅉ';
	KEY_MAP["X"] = 'ㅌ';
	KEY_MAP["Y"] = 'ㅛ';
	KEY_MAP["Z"] = 'ㅋ';

	KEY_MAP["hk"] = 'ㅘ';
	KEY_MAP["ho"] = 'ㅙ';
	KEY_MAP["hl"] = 'ㅚ';
	KEY_MAP["nj"] = 'ㅝ';
	KEY_MAP["np"] = 'ㅞ';
	KEY_MAP["nl"] = 'ㅟ';
	KEY_MAP["ml"] = 'ㅢ';

	KEY_MAP["sw"] = 'ㄵ';
	KEY_MAP["sg"] = 'ㄶ';
	KEY_MAP["fr"] = 'ㄺ';
	KEY_MAP["fa"] = 'ㄻ';
	KEY_MAP["fq"] = 'ㄼ';
	KEY_MAP["ft"] = 'ㄽ';
	KEY_MAP["fx"] = 'ㄾ';
	KEY_MAP["fv"] = 'ㄿ';
	KEY_MAP["fg"] = 'ㅀ';
	KEY_MAP["qt"] = 'ㅄ';

	var CHOSUNG = {};
	CHOSUNG['ㄱ'] = 0;
	CHOSUNG['ㄲ'] = 1;
	CHOSUNG['ㄴ'] = 2;
	CHOSUNG['ㄷ'] = 3;
	CHOSUNG['ㄸ'] = 4;
	CHOSUNG['ㄹ'] = 5;
	CHOSUNG['ㅁ'] = 6;
	CHOSUNG['ㅂ'] = 7;
	CHOSUNG['ㅃ'] = 8;
	CHOSUNG['ㅅ'] = 9;
	CHOSUNG['ㅆ'] = 10;
	CHOSUNG['ㅇ'] = 11;
	CHOSUNG['ㅈ'] = 12;
	CHOSUNG['ㅉ'] = 13;
	CHOSUNG['ㅊ'] = 14;
	CHOSUNG['ㅋ'] = 15;
	CHOSUNG['ㅌ'] = 16;
	CHOSUNG['ㅍ'] = 17;
	CHOSUNG['ㅎ'] = 18;

	var JUNGSUNG = {};
	JUNGSUNG['ㅏ'] = 0;
	JUNGSUNG['ㅐ'] = 1;
	JUNGSUNG['ㅑ'] = 2;
	JUNGSUNG['ㅒ'] = 3;
	JUNGSUNG['ㅓ'] = 4;
	JUNGSUNG['ㅔ'] = 5;
	JUNGSUNG['ㅕ'] = 6;
	JUNGSUNG['ㅖ'] = 7;
	JUNGSUNG['ㅗ'] = 8;
	JUNGSUNG['ㅘ'] = 9;
	JUNGSUNG['ㅙ'] = 10;
	JUNGSUNG['ㅚ'] = 11;
	JUNGSUNG['ㅛ'] = 12;
	JUNGSUNG['ㅜ'] = 13;
	JUNGSUNG['ㅝ'] = 14;
	JUNGSUNG['ㅞ'] = 15;
	JUNGSUNG['ㅟ'] = 16;
	JUNGSUNG['ㅠ'] = 17;
	JUNGSUNG['ㅡ'] = 18;
	JUNGSUNG['ㅢ'] = 19;
	JUNGSUNG['ㅣ'] = 20;

	var JONGSUNG = {};
	JONGSUNG['ㄱ'] = 1;
	JONGSUNG['ㄲ'] = 2;
	JONGSUNG['ㄳ'] = 3;
	JONGSUNG['ㄴ'] = 4;
	JONGSUNG['ㄵ'] = 5;
	JONGSUNG['ㄶ'] = 6;
	JONGSUNG['ㄷ'] = 7;
	JONGSUNG['ㄹ'] = 8;
	JONGSUNG['ㄺ'] = 9;
	JONGSUNG['ㄻ'] = 10;
	JONGSUNG['ㄼ'] = 11;
	JONGSUNG['ㄽ'] = 12;
	JONGSUNG['ㄾ'] = 13;
	JONGSUNG['ㄿ'] = 14;
	JONGSUNG['ㅀ'] = 15;
	JONGSUNG['ㅁ'] = 16;
	JONGSUNG['ㅂ'] = 17;
	JONGSUNG['ㅄ'] = 18;
	JONGSUNG['ㅅ'] = 19;
	JONGSUNG['ㅆ'] = 20;
	JONGSUNG['ㅇ'] = 21;
	JONGSUNG['ㅈ'] = 22;
	JONGSUNG['ㅊ'] = 23;
	JONGSUNG['ㅋ'] = 24;
	JONGSUNG['ㅌ'] = 25;
	JONGSUNG['ㅍ'] = 26;
	JONGSUNG['ㅎ'] = 27;

	var isAlpha = function( c )
	{
		var code = c.charCodeAt( 0 );
		if( code >= 0x0041 && code <= 0x005A )
	        return true;
	    if( code >= 0x0061 && code <= 0x007A )
	        return true;
	    return false;
	};

	var convert = function( alpha )
	{
		if( !alpha )
			return "";

	    var hangul = "";
	    var i = 0;
	    var chosung, tempCho;
	    var jungsung, jungsung2;
	    var jongsung, jongsung1, jongsung2;
	    var next;
	    var cho, jung, jong;
	    var c;

	    while( i < alpha.length )
	    {
	    	//알파벳 글자가 아닌 것은 바로 삽입한다.
	        if( !isAlpha( alpha.charAt( i ) ) )
	        {
	            hangul += alpha.charAt( i );
	            i++;
	            continue;
	        }

	        //초성찾기
	        chosung = KEY_MAP[alpha.substr( i, 1 )];
	        if( CHOSUNG.hasOwnProperty( chosung ) )
	            i++;
	        else
	            chosung = null;

	        //중성찾기
	        jungsung = KEY_MAP[alpha.substr( i, 1 )];
	        if( JUNGSUNG.hasOwnProperty( jungsung ) )
	        {
	            jungsung2 = KEY_MAP[alpha.substr(i, 2 )];
	            if( JUNGSUNG.hasOwnProperty( jungsung2 ) )
	            {
	                jungsung = jungsung2;
	                i++;
	            }
	            i++;
	        }
	        else
	        {
	            jungsung = null;
	        }

	        //초성이 없는 경우 중성을 바로 삽입
	        if( chosung == null && jungsung != null )
	        {
	            hangul += jungsung;
	            continue;
	        }

	        //초성이 있는데 중성이 없는 경우는  종성이 되는지 검사해야 한다.
	        //종성이 되는 않는다면 다시 초성으로 처리해야 하므로 tempCho에 저장해 둔다.
	        tempCho = chosung;
	        if( chosung != null && jungsung == null )
	        {
	            chosung = null;
	            i--;
	        }

	        //종성찾기
	        //종성은 2개의 자음으로 구성될 수 있고, 이때 다음 글자가 중성이 나오면
	        //이 종성은 다음 글자의 초성이 되어야 하므로 jongsung1, jongsung2에 저장해 둔다.
	        jongsung = null;
	        jongsung1 = null;
	        jongsung2 = null;

	        jongsung1 = KEY_MAP[alpha.substr( i, 1 )];
	        if( JONGSUNG.hasOwnProperty( jongsung1 ) )
	        {
	            jongsung = jongsung1;

	            jongsung2 = KEY_MAP[alpha.substr( i, 2 )];
	            if( JONGSUNG.hasOwnProperty( jongsung2 ) )
	            {
	                jongsung = jongsung2;
	                i++;
	            }
	            else
	            {
	                jongsung2 = null;
	            }
	            i++;
	        }
	        else
	        {
	            jongsung1 = null;
	        }

	        //초성만 있으면
	        if( tempCho != null && jungsung == null && jongsung == null )
	        {
	            i++;
	            hangul += tempCho;
	            continue;
	        }

	        //다음 글자가 바로 중성이 나오면 앞글자의 종성을 다음 글자 초성으로 사용해야 한다.
	        if( jongsung != null )
	        {
	            next = KEY_MAP[alpha.substr( i, 1 )];
	            if( JUNGSUNG.hasOwnProperty( next ) )
	            {
	                if( jongsung2 != null )
	                {
	                    jongsung = jongsung1;
	                    i--;
	                }
	                else if( jongsung1 != null )
	                {
	                    jongsung = null;
	                    i--;
	                }
	            }
	        }

	        //종성만 있으면
	        if( chosung == null && jungsung == null && jongsung != null )
	        {
	            hangul += jongsung;
	            continue;
	        }

	        //한글 조립
	        cho = CHOSUNG[chosung];
	        jung = JUNGSUNG[jungsung];
	        jong = JONGSUNG[jongsung];

	        c = ( 0xAC00 + ( cho * 21 * 28 ) +
	                       ( jung * 28 ) +
	                       ( !jong ? 0 : jong ) );

	        hangul += String.fromCharCode( c );
	    }

	    return hangul;
	};

	AtoH.convert = convert;

})();

exports.atoh = AtoH;
