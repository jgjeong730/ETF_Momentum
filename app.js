import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const SECTOR_COLORS = {
    'IT': '#4e79a7', '금융': '#f28e2c', '헬스케어': '#e15759', '산업재': '#76b7b2',
    '필수소비재': '#59a14f', '자유소비재': '#edc949', '에너지': '#af7aa1', '소재': '#ff9da7',
    '통신': '#9c755f', '유틸리티': '#bab0ab', '부동산': '#d4a6c8', '채권/혼합': '#b07aa1', '기타': '#999999',
};
const SECTORS_LIST = Object.keys(SECTOR_COLORS);
// Pre-populated ETF sector data for performance, using srtnCd as key
const ETF_SECTOR_DATA = {
    '466400': '채권/혼합', '491610': '채권/혼합', '451060': '기타', '463290': '채권/혼합', '479080': '채권/혼합',
    '0026S0': '기타', '0052S0': '채권/혼합', '0069M0': '기타', '0004G0': '기타', '0017Y0': '채권/혼합',
    '0052T0': '채권/혼합', '472350': '기타', '495330': '기타', '492500': '채권/혼합', '473440': '채권/혼합',
    '105190': '기타', '332500': '기타', '461270': '채권/혼합', '475260': '채권/혼합', '385600': '산업재',
    '475270': '채권/혼합', '475280': '채권/혼합', '469150': 'IT', '385590': '기타', '0010E0': '채권/혼합',
    '380340': '통신', '226380': '자유소비재', '475050': '자유소비재', '411060': '기타', '0021D0': '채권/혼합',
    '0021E0': '채권/혼합', '225130': '기타', '483340': 'IT', '365780': '채권/혼합', '114460': '채권/혼합',
    '494340': 'IT', '411050': 'IT', '446770': 'IT', '435040': '기타', '497510': '헬스케어',
    '460960': '기타', '414270': '산업재', '440640': '채권/혼합', '190620': '채권/혼합', '494330': '기타',
    '265690': '기타', '152500': '기타', '483330': 'IT', '487340': '채권/혼합', '291130': '기타',
    '452250': '채권/혼합', '476760': '채권/혼합', '453850': '채권/혼합', '476750': '채권/혼합', '480030': '기타',
    '280320': 'IT', '360200': '기타', '438080': '채권/혼합', '309230': '기타', '367380': '기타',
    '438100': '채권/혼합', '456880': '채권/혼합', '440650': '채권/혼합', '480040': 'IT', '402970': '기타',
    '0046Y0': '기타', '0049M0': '기타', '0049K0': '채권/혼합', '181480': '부동산', '480020': 'IT',
    '465580': 'IT', '465610': 'IT', '465620': 'IT', '473590': '기타', '0008E0': '산업재',
    '391600': '소재', '455660': '채권/혼합', '245710': '기타', '131890': '기타', '108450': '기타',
    '316300': '부동산', '277540': '기타', '483420': 'IT', '483320': 'IT', '448540': '채권/혼합',
    '433500': '소재', '256440': '기타', '487920': '기타', '487910': '자유소비재', '145670': '기타',
    '497520': '헬스케어', '238720': '기타', '196030': '기타', '205720': '기타', '469160': 'IT',
    '0021C0': '채권/혼합', '356540': '채권/혼합', '447430': '기타', '416090': '기타', '168580': '기타',
    '219900': '기타', '272910': '채권/혼합', '371870': 'IT', '496120': '기타', '354500': '기타',
    '305050': '기타', '457480': 'IT', '469170': '소재', '261920': '기타', '495710': '채권/혼합',
    '466810': 'IT', '457930': 'IT', '487750': 'IT', '445690': '기타', '486240': 'IT',
    '434960': '기타', '448570': 'IT', '285690': '기타', '292730': '기타', '0073X0': '채권/혼합',
    '293180': '기타', '407310': '기타', '332930': '기타', '304780': '기타', '486780': '기타',
    '306520': '기타', '489570': '채권/혼합', '448490': '채권/혼합', '454320': '산업재', '395290': '자유소비재',
    '395280': 'IT', '368190': 'IT', '402460': 'IT', '395270': 'IT', '438900': '필수소비재',
    '367740': '통신', '407300': '자유소비재', '381560': '산업재', '441540': '산업재', '381570': '소재',
    '479850': '자유소비재', '346000': '채권/혼합', '453060': '채권/혼합', '304760': '기타', '332940': '기타',
    '322400': '자유소비재', '322410': '기타', '473640': '소재', '354350': '자유소비재', '464060': 'IT',
    '461340': 'IT', '424460': '산업재', '401590': '소재', '0040S0': 'IT', '314700': '필수소비재',
    '486830': '채권/혼합', '432840': '기타', '498050': '헬스케어', '476260': 'IT', '434730': '소재',
    '491820': '유틸리티', '461500': '채권/혼합', '482870': '기타', '495750': '기타', '304770': '기타',
    '306530': '기타', '486790': '기타', '375760': '소재', '491700': '기타', '0000Y0': '채권/혼합',
    '215620': '기타', '391670': '기타', '472920': '채권/혼합', '472840': '기타', '0005G0': 'IT',
    '483570': 'IT', '407170': '자유소비재', '407160': 'IT', '069660': '기타', '294400': '기타',
    '253250': '기타', '253240': '기타', '253230': '기타', '467620': '채권/혼합', '489870': '채권/혼합',
    '464240': '채권/혼합', '458210': '채권/혼합', '460280': '헬스케어', '488200': 'IT', '488210': 'IT',
    '469790': 'IT', '100910': '기타', '435530': '채권/혼합', '435540': '채권/혼합', '435550': '채권/혼합',
    '104530': '기타', '148070': '채권/혼합', '167860': '채권/혼합', '471460': '채권/혼합', '114470': '채권/혼합',
    '473490': 'IT', '489860': '유틸리티', '394350': '산업재', '130730': '채권/혼합', '419890': '채권/혼합',
    '411860': '기타', '476450': '채권/혼합', '430500': '채권/혼합', '426330': '금융', '449770': '기타',
    '449780': '기타', '453080': '기타', '460270': '채권/혼합', '138230': '기타', '225800': '기타',
    '139660': '기타', '230480': '기타', '373790': '기타', '483030': '헬스케어', '459790': '기타',
    '498270': 'IT', '474800': '에너지', '104520': '기타', '0015E0': '채권/혼합', '483020': '헬스케어',
    '200250': '기타', '454780': '채권/혼합', '441330': '기타', '454180': '자유소비재', '496090': '기타',
    '316670': '기타', '291630': '기타', '291620': '기타', '153270': '기타', '122260': '채권/혼합',
    '0015F0': '채권/혼합', '069500': '기타', '226980': '기타', '337160': '기타', '363580': 'IT',
    '278530': '기타', '337150': '기타', '223190': '기타', '252650': '기타', '360140': '기타',
    '284430': '채권/혼합', '252670': '기타', '494890': '기타', '498400': '기타', '476810': '채권/혼합',
    '467940': '채권/혼합', '491080': '채권/혼합', '473290': '채권/혼합', '0007F0': '채권/혼합', '305720': 'IT',
    '462330': 'IT', '461950': 'IT', '457690': '채권/혼합', '271060': '필수소비재', '457700': '채권/혼합',
    '395160': 'IT', '471990': 'IT', '487240': '유틸리티', '481050': '채권/혼합', '459580': '채권/혼합',
    '439860': '채권/혼합', '266370': 'IT', '368680': 'IT', '423160': '채권/혼합', '292190': '기타',
    '306950': '기타', '229720': '기타', '266360': '자유소비재', '291890': '기타', '289040': '기타',
    '156080': '기타', '278540': '기타', '251350': '기타', '269420': '산업재', '433970': '채권/혼합',
    '433980': '채권/혼합', '434060': '채권/혼합', '329650': '채권/혼합', '329660': '채권/혼합', '329670': '채권/혼합',
    '395170': '기타', '315930': '기타', '261220': '에너지', '271050': '에너지', '468370': '채권/혼합',
    '468630': '채권/혼합', '468380': '채권/혼합', '275290': '기타', '117700': '산업재', '300950': 'IT',
    '266390': '자유소비재', '279530': '기타', '132030': '기타', '280940': '기타', '138910': '기타',
    '471230': '채권/혼합', '439870': '채권/혼합', '114260': '채권/혼합', '152380': '채권/혼합', '176950': '채권/혼합',
    '292770': '채권/혼합', '276990': 'IT', '476070': '헬스케어', '0064K0': '채권/혼합', '498410': '금융',
    '102960': '산업재', '404260': '소재', '273140': '채권/혼합', '153130': '채권/혼합', '214980': '채권/혼합',
    '487950': 'IT', '122630': '기타', '445290': 'IT', '488770': '채권/혼합', '321410': '채권/혼합',
    '337120': '기타', '401470': 'IT', '244620': '기타', '275280': '기타', '308620': '채권/혼합',
    '484790': '채권/혼합', '304660': '채권/혼합', '304670': '채권/혼합', '481060': '채권/혼합', '0041D0': 'IT',
    '487230': '유틸리티', '485540': 'IT', '483280': 'IT', '428560': '금융', '379800': '기타',
    '449180': '기타', '453660': '자유소비재', '453650': '금융', '0005A0': '기타', '276970': '기타',
    '0026E0': '기타', '0068M0': '기타', '200030': '산업재', '219480': '기타', '0041E0': '기타',
    '218420': '에너지', '463640': '유틸리티', '463690': '통신', '463680': 'IT', '453630': '필수소비재',
    '453640': '헬스케어', '185680': '헬스케어', '0028X0': 'IT', '379810': '기타', '449190': '기타',
    '494300': '기타', '409820': '기타', '304940': '기타', '409810': '기타', '411420': 'IT',
    '455030': '채권/혼합', '261240': '기타', '261250': '기타', '261270': '기타', '261260': '기타',
    '280930': '기타', '0048J0': '채권/혼합', '390390': 'IT', '489250': '기타', '483290': '기타',
    '441640': '기타', '352560': '부동산', '314250': 'IT', '473460': '기타', '390400': '산업재',
    '437080': '채권/혼합', '419420': '소재', '491090': 'IT', '0038A0': 'IT', '244580': '헬스케어',
    '091160': 'IT', '494310': 'IT', '325020': '기타', '211900': '기타', '237370': '채권/혼합',
    '244670': '기타', '140700': '금융', '102780': '기타', '213610': '기타', '448330': '채권/혼합',
    '325010': '기타', '385510': '소재', '446690': 'IT', '437070': '채권/혼합', '117460': '소재',
    '275300': '기타', '140710': '산업재', '395150': '자유소비재', '456250': '자유소비재', '400570': '소재',
    '144600': '기타', '091170': '금융', '453810': '기타', '453820': '기타', '0000H0': '기타',
    '477730': '기타', '114800': '기타', '101280': '기타', '352540': '부동산', '091180': '자유소비재',
    '385520': '산업재', '363570': '채권/혼합', '273130': '채권/혼합', '102970': '금융', '419430': 'IT',
    '169950': '기타', '428510': 'IT', '283580': '기타', '099140': '기타', '204450': '기타',
    '415340': '기타', '256750': '기타', '0065G0': 'IT', '372330': 'IT', '0048K0': 'IT',
    '117680': '소재', '279540': '기타', '445150': '산업재', '495850': '기타', '373490': '기타',
    '229200': '기타', '233740': '기타', '360150': '기타', '251340': '기타', '461450': '기타',
    '226490': '기타', '237350': '기타', '359210': '기타', '337140': '기타', '138920': '필수소비재',
    '244660': '기타', '375770': '소재', '459560': 'IT', '475080': '채권/혼합', '266410': '필수소비재',
    '298770': 'IT', '476800': '부동산', '450190': 'IT', '450180': 'IT', '266420': '헬스케어',
    '364690': 'IT', '487130': 'IT', '0074K0': '기타', '471040': 'IT', '0020H0': 'IT',
    '475070': '유틸리티', '0015B0': '기타', '490330': '헬스케어', '497780': '에너지', '462900': '헬스케어',
    '476850': '기타', '0051A0': 'IT', '495230': '기타', '482030': 'IT', '152100': '기타',
    '491220': '기타', '253150': '기타', '253160': '기타', '395750': '기타', '395760': '기타',
    '453010': '채권/혼합', '429740': '부동산', '449450': '산업재', '269530': '산업재', '433860': '채권/혼합',
    '433870': '채권/혼합', '433880': '채권/혼합', '251590': '기타', '161510': '기타', '0018C0': '기타',
    '489030': '기타', '251600': '채권/혼합', '461460': '채권/혼합', '451600': '채권/혼합', '491230': '채권/혼합',
    '289670': '채권/혼합', '298340': '채권/혼합', '489010': 'IT', '442580': 'IT', '189400': '기타',
    '496770': '산업재', '419650': '소재', '0007G0': '소재', '0035T0': 'IT', '415920': '소재',
    '278620': '채권/혼합', '477050': '채권/혼합', '0050E0': 'IT', '429760': '기타', '269540': '기타',
    '0057H0': '채권/혼합', '494410': '기타', '287180': 'IT', '213630': '기타', '332610': '채권/혼합',
    '456200': '채권/혼합', '494420': '기타', '0023B0': 'IT', '332620': '채권/혼합', '464470': '채권/혼합',
    '461900': 'IT', '461910': 'IT', '195970': '기타', '238670': '채권/혼합', '195980': '기타',
    '373530': '기타', '256450': '기타', '447660': '채권/혼합', '239660': '채권/혼합', '421320': '산업재',
    '464920': 'IT', '489000': '채권/혼합', '451000': '채권/혼합', '280920': '기타', '266550': '기타',
    '0047N0': 'IT', '495040': '기타', '301400': '기타', '301410': '기타', '227830': '기타',
    '122090': '기타', '328370': '기타', '457990': '소재', '0000J0': '기타', '148020': '기타',
    '361580': '기타', '290080': '기타', '284980': '금융', '252400': '기타', '252410': '기타',
    '252420': '기타', '475720': '기타', '448600': '채권/혼합', '465330': 'IT', '465350': 'IT',
    '422420': 'IT', '367760': '통신', '105780': '기타', '469070': 'IT', '477080': '채권/혼합',
    '290130': '기타', '326240': 'IT', '385560': '채권/혼합', '479520': '채권/혼합', '270800': '기타',
    '292050': '기타', '442550': '채권/혼합', '442560': '채권/혼합', '442570': '채권/혼합', '234310': '기타',
    '241390': '채권/혼합', '300640': 'IT', '266160': '기타', '481430': '채권/혼합', '114100': '채권/혼합',
    '282000': '채권/혼합', '451670': '채권/혼합', '295000': '채권/혼합', '295020': '채권/혼합', '432600': '채권/혼합',
    '397420': '채권/혼합', '437370': '필수소비재', '375270': '부동산', '475380': '부동산', '476310': '헬스케어',
    '417450': '소재', '442320': '소재', '461490': '채권/혼합', '459750': '기타', '399580': '소재',
    '276650': 'IT', '336160': '채권/혼합', '326230': '기타', '272560': '채권/혼합', '385550': '채권/혼합',
    '196230': '채권/혼합', '0061Z0': '채권/혼합', '315960': '기타', '455890': '채권/혼합', '401170': 'IT',
    '481340': '채권/혼합', '472870': '채권/혼합', '472830': '채권/혼합', '485690': 'IT', '490590': 'IT',
    '495940': 'IT', '379780': '기타', '453330': '기타', '0005C0': '기타', '460660': '기타',
    '219390': '에너지', '354240': '금융', '368590': '기타', '437350': '채권/혼합', '455960': '채권/혼합',
    '469530': '기타', '469060': 'IT', '469050': 'IT', '491630': 'IT', '490600': '기타',
    '0018Z0': 'IT', '0013P0': '금융', '267440': '채권/혼합', '267490': '채권/혼합', '267450': '채권/혼합',
    '0036Z0': '에너지', '491620': 'IT', '0036R0': 'IT', '0000Z0': '헬스케어', '446700': 'IT',
    '475350': '기타', '388420': 'IT', '448630': '채권/혼합', '367770': '소재', '140570': '기타',
    '140580': '기타', '379790': '기타', '498610': '기타', '488480': '기타', '385540': '채권/혼합',
    '183710': '채권/혼합', '310080': '기타', '463300': '기타', '174350': '기타', '136340': '채권/혼합',
    '281990': '기타', '272570': '채권/혼합', '250730': '기타', '291680': '기타', '371150': 'IT',
    '183700': '채권/혼합', '388280': '자유소비재', '498860': '금융', '495050': '기타', '270810': '기타',
    '278240': '기타', '275750': '기타', '302450': '기타', '0047P0': 'IT', '0013R0': '채권/혼합',
    '449580': '채권/혼합', '334690': '기타', '334700': '기타', '0047R0': 'IT', '427120': 'IT',
    '253280': '헬스케어', '253290': '채권/혼합', '411540': '기타', '295040': '기타', '462540': '채권/혼합',
    '488980': '채권/혼합', '455860': 'IT', '455850': 'IT', '497880': '채권/혼합', '363510': '채권/혼합',
    '292500': '기타', '404650': '소재', '490480': '산업재', '438570': '채권/혼합', '474390': '채권/혼합',
    '438560': '채권/혼합', '0066W0': '기타', '0022T0': '기타', '400590': '소재', '484880': '금융',
    '484890': '채권/혼합', '461600': '채권/혼합', '473330': '채권/혼합', '494210': '기타', '479620': 'IT',
    '481180': 'IT', '486450': '유틸리티', '433330': '기타', '399110': '기타', '499150': '기타',
    '447620': '채권/혼합', '476030': '기타', '446720': '기타', '452360': '기타', '493420': '기타',
    '490490': '채권/혼합', '0023A0': 'IT', '0051G0': '소재', '481190': 'IT', '481200': 'IT',
    '475300': 'IT', '475310': 'IT', '400580': '소재', '459370': '소재', '464610': '헬스케어',
    '466930': '자유소비재', '464600': '자유소비재', '0005D0': 'IT', '466920': '산업재', '436140': '채권/혼합',
    '0016X0': '채권/혼합', '220130': '기타', '415760': '기타', '413220': '소재', '469830': '채권/혼합',
    '444200': 'IT', '495550': '기타', '450910': '기타', '0040X0': '채권/혼합', '0040Y0': '채권/혼합',
    '423170': 'IT', '429980': 'IT', '0008T0': '자유소비재', '102110': '기타', '139260': 'IT',
    '139220': '산업재', '139290': '자유소비재', '139270': '금융', '227550': '산업재', '227560': '필수소비재',
    '139250': '소재', '139230': '산업재', '139240': '소재', '227540': '헬스케어', '243880': 'IT',
    '310960': '기타', '252000': '기타', '267770': '기타', '252710': '기타', '243890': '소재',
    '315270': '통신', '289480': '기타', '166400': '기타', '453540': '채권/혼합', '494900': '채권/혼합',
    '0001S0': '채권/혼합', '480260': '채권/혼합', '364980': 'IT', '412570': 'IT', '462010': 'IT',
    '305540': 'IT', '471760': 'IT', '365040': 'IT', '364960': 'IT', '412560': 'IT',
    '475630': '채권/혼합', '357870': '채권/혼합', '499660': '채권/혼합', '400970': 'IT', '396500': 'IT',
    '377990': '소재', '417630': '기타', '449170': '채권/혼합', '292160': '기타', '0072R0': '기타',
    '404540': '소재', '228820': '기타', '300610': 'IT', '463250': '산업재', '138530': '기타',
    '445910': '기타', '289260': '기타', '289250': '기타', '310970': '기타', '269370': '산업재',
    '248270': '헬스케어', '0025N0': '채권/혼합', '292150': '기타', '453950': 'IT', '364990': 'IT',
    '139280': '기타', '237440': '채권/혼합', '319640': '기타', '160580': '기타', '451530': '채권/혼합',
    '114820': '채권/혼합', '275980': 'IT', '464310': 'IT', '418670': 'IT', '466950': 'IT',
    '491010': '유틸리티', '412770': 'IT', '394670': 'IT', '440340': '채권/혼합', '476690': '헬스케어',
    '480310': 'IT', '387270': '기타', '276000': '소재', '394660': '산업재', '371450': 'IT',
    '464930': '기타', '139320': '기타', '137610': '필수소비재', '182490': '채권/혼합', '272580': '채권/혼합',
    '157450': '채권/혼합', '105010': '기타', '123320': '기타', '174350': '기타', '329200': '부동산',
    '341850': '채권/혼합', '0043B0': '채권/혼합', '147970': '기타', '458250': '채권/혼합', '476550': '채권/혼합',
    '491830': 'IT', '490090': 'IT', '493810': 'IT', '182480': '부동산', '360750': '기타',
    '448290': '기타', '488500': '기타', '225040': '기타', '429000': '기타', '143850': '기타',
    '225030': '기타', '482730': '기타', '133690': '기타', '448300': '기타', '483240': '기타',
    '418660': '기타', '435420': '채권/혼합', '441680': '기타', '486290': '기타', '429010': '기타',
    '203780': '헬스케어', '245340': '기타', '456610': '채권/혼합', '329750': '채권/혼합', '261110': '기타',
    '261120': '기타', '494840': '산업재', '458730': '기타', '0008S0': '기타', '458750': '기타',
    '458760': '기타', '0015K0': '자유소비재', '305080': '채권/혼합', '0046A0': '채권/혼합', '465670': '기타',
    '381170': 'IT', '472160': 'IT', '472170': '채권/혼합', '474220': 'IT', '458260': '채권/혼합',
    '497570': 'IT', '381180': 'IT', '423920': 'IT', '228810': '자유소비재', '364970': '헬스케어',
    '091230': 'IT', '488080': 'IT', '098560': '통신', '211560': '기타', '472150': '기타',
    '138520': '기타', '157490': 'IT', '0000D0': '채권/혼합', '228800': '자유소비재', '227570': '기타',
    '438330': '채권/혼합', '261140': '기타', '130680': '에너지', '217770': '에너지', '195930': '기타',
    '225050': '기타', '245350': '기타', '091220': '금융', '466940': '금융', '307510': '헬스케어',
    '225060': '기타', '453870': '기타', '236350': '기타', '479730': '자유소비재', '123310': '기타',
    '365000': 'IT', '195920': '기타', '241180': '기타', '465660': 'IT', '292560': '기타',
    '494670': '산업재', '451540': '채권/혼합', '150460': '자유소비재', '302190': '채권/혼합', '157500': '금융',
    '307520': '기타', '0067Y0': 'IT', '192090': '기타', '204480': '기타', '217780': '기타',
    '245360': '기타', '414780': '기타', '0067V0': '기타', '371470': '헬스케어', '396520': 'IT',
    '371460': 'IT', '456680': 'IT', '396510': '소재', '0047A0': 'IT', '117690': '기타',
    '371160': 'IT', '438320': 'IT', '0053L0': 'IT', '0052D0': '기타', '496080': '기타',
    '471780': 'IT', '232080': '기타', '233160': '기타', '261060': 'IT', '261070': '헬스케어',
    '250780': '기타', '461580': '기타', '277630': '기타', '210780': '기타', '277640': '기타',
    '277650': '기타', '376410': '소재', '447770': '채권/혼합', '0060H0': '기타', '387280': '산업재',
    '449690': 'IT', '449680': 'IT', '143860': '헬스케어', '138540': '기타', '228790': '자유소비재',
    '441800': '기타', '463050': '헬스케어', '404120': '소재', '385710': '기타', '410870': '자유소비재',
    '456600': 'IT', '494180': '자유소비재', '485810': '헬스케어', '478150': '산업재', '426020': '기타',
    '426030': '기타', '0019K0': '채권/혼합', '0036D0': '기타', '0043Y0': 'IT', '495060': '기타',
    '385720': '기타', '108590': '기타', '145850': '기타', '472720': '기타', '496130': '기타',
    '433250': '기타', '494220': 'IT', '470310': 'IT', '476000': '기타', '422260': '자유소비재',
    '452440': '기타', '448100': '기타', '468820': '채권/혼합', '413930': '기타', '458030': '채권/혼합',
    '426150': '채권/혼합', '444490': '기타', '489290': '기타', '440910': '산업재', '474590': 'IT',
    '496020': '채권/혼합', '488720': '채권/혼합', '480460': '부동산', '488290': 'IT', '438740': '기타',
    '403790': '기타', '465780': '채권/혼합', '442260': '기타', '0001P0': '헬스케어', '159800': '기타',
    '0007N0': '기타', '462340': '기타', '433220': '산업재', '451150': '기타', '477490': '기타',
    '407830': 'IT', '0002C0': '기타', '474920': '기타', '442090': '산업재', '407820': 'IT',
    '152870': '기타', '491510': '기타', '192720': '기타', '498180': '채권/혼합', '140950': '기타'
};
// --- App State ---
let allRankedEtfs = [];
let newlyListedEtfs = [];
let sectorMap = new Map();
let activeSectorFilter = null;
let etfDataCache = new Map();
let etfHistoryCache = new Map(); // For fast, per-ETF history lookups
let currentSortOrder = 'desc';
let currentSortColumn = 'rank';
const WATCHLIST_STORAGE_KEY = 'etf_watchlist_v1';
let watchlist = []; // [{ isinCd, itmsNm, snapshot }]
// --- End App State ---
const getSectorsForEtfs = (etfs) => {
    const finalSectorMap = new Map();
    if (!etfs || etfs.length === 0) {
        return finalSectorMap;
    }
    const uniqueEtfs = Array.from(new Map(etfs.map(item => [item.srtnCd, item])).values());
    for (const etf of uniqueEtfs) {
        const sector = ETF_SECTOR_DATA[etf.srtnCd] || '기타';
        finalSectorMap.set(etf.srtnCd, sector);
    }
    return finalSectorMap;
};
const aggregateToWeekly = (dailyData) => {
    const weeklyData = new Map();
    for (const day of dailyData) {
        const date = new Date(parseInt(day.date.substring(0, 4)), parseInt(day.date.substring(4, 6)) - 1, parseInt(day.date.substring(6, 8)));
        const weekStart = new Date(date);
        weekStart.setDate(date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)); // Monday as start of week
        const weekKey = weekStart.toISOString().split('T')[0];
        if (!weeklyData.has(weekKey)) {
            weeklyData.set(weekKey, {
                date: day.date,
                high: -Infinity,
                low: Infinity,
                close: 0,
                volume: 0,
                lastDayData: day,
            });
        }
        const week = weeklyData.get(weekKey);
        week.high = Math.max(week.high, day.high);
        week.low = Math.min(week.low, day.low);
        week.volume += day.volume;
        week.close = day.close; // last close of the week
        week.date = day.date; // last date of the week
    }
    return Array.from(weeklyData.values());
};
document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetch-button');
    const loader = document.getElementById('loader');
    const tableContainer = document.getElementById('table-container');
    const tableBody = document.getElementById('etf-table-body');
    const errorOutput = document.getElementById('error-output');
    const apiKeyInput = document.getElementById('api-key-input');
    const baseDateInput = document.getElementById('base-date-input');
    const weight1wInput = document.getElementById('weight-1w');
    const weight2wInput = document.getElementById('weight-2w');
    const weight1mInput = document.getElementById('weight-1m');
    const weight3mInput = document.getElementById('weight-3m');
    const weight6mInput = document.getElementById('weight-6m');
    const weight12mInput = document.getElementById('weight-12m');
    const excludeRecentMonthInput = document.getElementById('exclude-recent-month');
    const minVolumeInput = document.getElementById('min-volume');
    const minTradeValueInput = document.getElementById('min-trade-value');
    const displayCountInput = document.getElementById('display-count');
    const rankChangePeriodInput = document.getElementById('rank-change-period');
    // New ETF elements
    const showNewEtfsButton = document.getElementById('show-new-etfs-button');
    const newEtfsContainer = document.getElementById('new-etfs-container');
    const newEtfsTableBody = document.getElementById('new-etfs-table-body');
    // Details Modal elements
    const modal = document.getElementById('details-modal');
    const modalCloseButton = document.getElementById('modal-close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalLoader = document.getElementById('modal-loader');
    const modalError = document.getElementById('modal-error');
    const modalData = document.getElementById('modal-data');
    const downloadCsvButton = document.getElementById('download-csv-button');
    const downloadStatus = document.getElementById('download-status');
    // Sector elements
    const sectorSummary = document.getElementById('sector-summary');
    const sectorLegend = document.getElementById('sector-legend');
    // Stock Search elements
    const stockSearchInput = document.getElementById('stock-search-input');
    const stockSearchHint = document.getElementById('stock-search-hint');
    const stockSearchEmpty = document.getElementById('stock-search-empty');
    const stockSearchTableContainer = document.getElementById('stock-search-table-container');
    const stockSearchTableBody = document.getElementById('stock-search-table-body');
    // Watchlist elements
    const watchlistCount = document.getElementById('watchlist-count');
    const watchlistEmpty = document.getElementById('watchlist-empty');
    const watchlistTableContainer = document.getElementById('watchlist-table-container');
    const watchlistTableBody = document.getElementById('watchlist-table-body');
    const watchlistExportButton = document.getElementById('watchlist-export-button');
    const watchlistImportInput = document.getElementById('watchlist-import-input');
    const watchlistImportStatus = document.getElementById('watchlist-import-status');
    // Fix: Using any for charts to avoid complex Chart.js type compatibility issues in this environment
    let charts = {};
    let performanceChart = null;
    // Chart period selection state
    const DEFAULT_CHART_PERIOD_DAYS = 250;
    let currentChartPeriodDays = DEFAULT_CHART_PERIOD_DAYS;
    let activeChartRedraw = null;
    let activeChartHistory = null;
    let activeChartSource = null;
    if (!fetchButton || !loader || !tableContainer || !tableBody || !errorOutput || !apiKeyInput || !baseDateInput || !weight1wInput || !weight2wInput || !weight1mInput || !weight3mInput || !weight6mInput || !weight12mInput || !excludeRecentMonthInput || !minVolumeInput || !minTradeValueInput || !displayCountInput || !rankChangePeriodInput || !modal || !modalCloseButton || !modalTitle || !modalLoader || !modalError || !modalData || !downloadCsvButton || !downloadStatus || !sectorSummary || !sectorLegend || !showNewEtfsButton || !newEtfsContainer || !newEtfsTableBody || !stockSearchInput || !stockSearchHint || !stockSearchEmpty || !stockSearchTableContainer || !stockSearchTableBody || !watchlistCount || !watchlistEmpty || !watchlistTableContainer || !watchlistTableBody || !watchlistExportButton || !watchlistImportInput || !watchlistImportStatus) {
        console.error('Required DOM elements not found.');
        return;
    }
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;
    baseDateInput.value = todayStr;
    baseDateInput.max = todayStr;
    const formatNumber = (num) => {
        const number = Number(num);
        if (isNaN(number))
            return String(num);
        return number.toLocaleString('en-US');
    };
    const formatLargeNumber = (valueStr, divisor) => {
        const num = Number(valueStr);
        if (isNaN(num))
            return 'N/A';
        const dividedNum = num / divisor;
        return dividedNum.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
    };
    const getChangeClass = (value) => {
        if (value > 0)
            return 'positive';
        if (value < 0)
            return 'negative';
        return 'neutral';
    };
    const formatDate = (date) => {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        return `${yyyy}${mm}${dd}`;
    };
    const getPastDate = (baseDate, months, days) => {
        const pastDate = new Date(baseDate);
        if (months > 0)
            pastDate.setMonth(pastDate.getMonth() - months);
        if (days > 0)
            pastDate.setDate(pastDate.getDate() - days);
        return pastDate;
    };
    const fetchEtfDataForDate = async (apiKey, date) => {
        const BASE_URL = "https://apis.data.go.kr/1160100/service/GetSecuritiesProductInfoService/getETFPriceInfo";
        const params = new URLSearchParams({
            serviceKey: apiKey,
            numOfRows: '1000',
            pageNo: '1',
            resultType: 'json',
            basDt: date,
        });
        const url = `${BASE_URL}?${params.toString()}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.warn(`HTTP error for date ${date}! status: ${response.status}`);
                return null;
            }
            const data = await response.json();
            const items = data?.response?.body?.items?.item;
            if (!items) {
                const errorMessage = data?.response?.header?.resultMsg;
                if (errorMessage && errorMessage !== 'NORMAL SERVICE.') {
                    console.warn(`API error for date ${date}: ${errorMessage}`);
                }
            }
            return items || null;
        }
        catch (error) {
            console.warn(`Failed to fetch data for date ${date}:`, error);
            return null;
        }
    };
    const fetchEtfHistory = async (apiKey, isinCd, beginDate, endDate) => {
        const BASE_URL = "https://apis.data.go.kr/1160100/service/GetSecuritiesProductInfoService/getETFPriceInfo";
        const params = new URLSearchParams({
            serviceKey: apiKey,
            numOfRows: '1000',
            pageNo: '1',
            resultType: 'json',
            isinCd: isinCd,
            beginBasDt: beginDate,
            endBasDt: endDate,
        });
        const url = `${BASE_URL}?${params.toString()}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.warn(`HTTP error for history of ${isinCd}! status: ${response.status}`);
                return null;
            }
            const data = await response.json();
            const items = data?.response?.body?.items?.item;
            if (!items) {
                const errorMessage = data?.response?.header?.resultMsg;
                if (errorMessage && errorMessage !== 'NORMAL SERVICE.') {
                    console.warn(`API error for history of ${isinCd}: ${errorMessage}`);
                }
            }
            // The API might return a single object instead of an array if there's only one result
            if (items && !Array.isArray(items)) {
                return [items];
            }
            return items || null;
        }
        catch (error) {
            console.warn(`Failed to fetch history for ${isinCd}:`, error);
            return null;
        }
    };
    const fetchHistoryWithChunking = async (apiKey, isinCd, totalBeginDate, totalEndDate) => {
        const allResults = [];
        let currentStartDate = new Date(totalBeginDate);
        const CHUNK_DAYS = 180; // Fetch in ~6 month chunks to avoid API limits
        while (currentStartDate <= totalEndDate) {
            const currentEndDate = new Date(currentStartDate);
            currentEndDate.setDate(currentEndDate.getDate() + CHUNK_DAYS);
            const effectiveEndDate = currentEndDate > totalEndDate ? totalEndDate : currentEndDate;
            const chunkResults = await fetchEtfHistory(apiKey, isinCd, formatDate(currentStartDate), formatDate(effectiveEndDate));
            if (chunkResults && Array.isArray(chunkResults)) {
                allResults.push(...chunkResults);
            }
            currentStartDate.setDate(currentStartDate.getDate() + CHUNK_DAYS + 1);
        }
        if (allResults.length === 0) {
            return null;
        }
        // Remove duplicates and sort, in case of overlaps or API inconsistencies
        const uniqueResults = Array.from(new Map(allResults.map(item => [item.basDt, item])).values())
            .sort((a, b) => a.basDt.localeCompare(b.basDt));
        return uniqueResults;
    };
    const fetchEtfDataWithRetry = async (apiKey, startDate, maxRetries = 5) => {
        let currentDate = new Date(startDate);
        for (let i = 0; i < maxRetries; i++) {
            const dateStr = formatDate(currentDate);
            const items = await fetchEtfDataForDate(apiKey, dateStr);
            if (items && items.length > 0) {
                return { items, actualDate: dateStr };
            }
            currentDate.setDate(currentDate.getDate() - 1);
        }
        return null;
    };
    const getDataForDate = async (apiKey, targetDate) => {
        const targetDateStr = formatDate(targetDate);
        // 1. Prioritize exact cache hit for performance.
        if (etfDataCache.has(targetDateStr)) {
            console.log(`Cache hit for exact date: ${targetDateStr}`);
            return { items: etfDataCache.get(targetDateStr), actualDate: targetDateStr };
        }
        // 2. If no exact match, always attempt to fetch from the API first
        // to get the absolute latest data and supplement the cache.
        console.log(`Cache miss for ${targetDateStr}. Fetching from API to supplement.`);
        const apiResult = await fetchEtfDataWithRetry(apiKey, targetDate);
        if (apiResult) {
            // Successfully fetched data, update caches and return.
            etfDataCache.set(apiResult.actualDate, apiResult.items);
            // Incrementally update history cache
            for (const item of apiResult.items) {
                const history = etfHistoryCache.get(item.isinCd) || [];
                const index = history.findIndex(h => h.basDt === item.basDt);
                if (index > -1) {
                    history[index] = item; // update existing
                }
                else {
                    history.push(item); // append new
                }
                etfHistoryCache.set(item.isinCd, history);
            }
            console.log(`Cached new data for date: ${apiResult.actualDate}`);
            return apiResult;
        }
        // 3. ONLY if the API fetch fails completely, fall back to searching the cache
        // for a slightly older date. This handles API outages if a cache is present.
        console.log(`API fetch failed for ${formatDate(targetDate)}. Searching for recent data in cache as a fallback.`);
        let currentDate = new Date(targetDate);
        for (let i = 0; i < 5; i++) { // Check up to 5 days back in the cache
            const dateStr = formatDate(currentDate);
            if (etfDataCache.has(dateStr)) {
                console.log(`Cache fallback hit for date: ${dateStr}`);
                return { items: etfDataCache.get(dateStr), actualDate: dateStr };
            }
            currentDate.setDate(currentDate.getDate() - 1);
        }
        // If both API and cache fail, return null.
        return null;
    };
    const createPriceMap = (items) => {
        const map = new Map();
        if (Array.isArray(items)) {
            for (const item of items) {
                if (item.isinCd && item.clpr) {
                    map.set(item.isinCd, parseFloat(item.clpr));
                }
            }
        }
        return map;
    };
    const createRankMap = (results) => {
        const rankMap = new Map();
        if (!results) {
            return rankMap;
        }
        const sorted = [...results].sort((a, b) => {
            const scoreA = a.momentumScore ?? -Infinity;
            const scoreB = b.momentumScore ?? -Infinity;
            return scoreB - scoreA;
        });
        sorted.forEach((item, index) => {
            if (item.isinCd) {
                rankMap.set(item.isinCd, index + 1);
            }
        });
        return rankMap;
    };
    const getRankedEtfsForDate = async (apiKey, baseDate, weights, filters, excludeRecentMonth) => {
        const dataResult = await getDataForDate(apiKey, baseDate);
        if (!dataResult)
            return null;
        const { items: currentItems, actualDate: actualBaseDateStr } = dataResult;
        const filteredItems = currentItems.filter(item => {
            const volume = parseInt(item.trqu, 10);
            const tradeValue = parseInt(item.trPrc, 10);
            return volume >= filters.minVolume && tradeValue >= filters.minTradeValue;
        });
        if (filteredItems.length === 0)
            return { results: [], actualDate: actualBaseDateStr };
        const actualBaseDate = new Date(parseInt(actualBaseDateStr.substring(0, 4), 10), parseInt(actualBaseDateStr.substring(4, 6), 10) - 1, parseInt(actualBaseDateStr.substring(6, 8), 10));
        // When excluding the most recent month (12-1 momentum style), every return is
        // measured as of one month ago instead of today, so the reversal-prone last
        // month never enters any of the lookback windows.
        const anchorDate = excludeRecentMonth ? getPastDate(actualBaseDate, 1, 0) : actualBaseDate;
        const periods = [
            { label: '1주', months: 0, days: 7 },
            { label: '2주', months: 0, days: 14 },
            { label: '1개월', months: 1, days: 0 },
            { label: '3개월', months: 3, days: 0 },
            { label: '6개월', months: 6, days: 0 },
            { label: '12개월', months: 12, days: 0 },
        ];
        const anchorDataPromise = excludeRecentMonth ? getDataForDate(apiKey, anchorDate) : Promise.resolve(dataResult);
        const historicalDataPromises = periods.map(p => {
            const pastDate = getPastDate(anchorDate, p.months, p.days);
            return getDataForDate(apiKey, pastDate);
        });
        const [anchorResult, ...historicalResults] = await Promise.all([anchorDataPromise, ...historicalDataPromises]);
        const anchorPriceMap = createPriceMap(anchorResult ? anchorResult.items : null);
        const historicalPriceMaps = historicalResults.map(result => createPriceMap(result ? result.items : null));
        const etfResults = [];
        for (const item of filteredItems) {
            const anchorPrice = excludeRecentMonth ? anchorPriceMap.get(item.isinCd) : parseFloat(item.clpr);
            const returns = historicalPriceMaps.map(priceMap => {
                const pastPrice = priceMap.get(item.isinCd);
                if (pastPrice && anchorPrice && pastPrice > 0) {
                    return ((anchorPrice - pastPrice) / pastPrice) * 100;
                }
                return null;
            });
            const [oneWeek, twoWeek, oneMonth, threeMonth, sixMonth, twelveMonth] = returns;
            let momentumScore = null;
            if (oneWeek !== null && twoWeek !== null && oneMonth !== null && threeMonth !== null && sixMonth !== null && twelveMonth !== null) {
                momentumScore = (oneWeek * weights.w1w) + (twoWeek * weights.w2w) + (oneMonth * weights.w1m) + (threeMonth * weights.w3m) + (sixMonth * weights.w6m) + (twelveMonth * weights.w12m);
            }
            etfResults.push({ ...item, returns, momentumScore });
        }
        return { results: etfResults, actualDate: actualBaseDateStr };
    };
    const calculateStochastic = (data, period) => {
        const stochasticValues = [];
        if (data.length === 0)
            return [];
        for (let i = 0; i < data.length; i++) {
            if (i < period - 1) {
                stochasticValues.push({ date: data[i].date, value: null });
                continue;
            }
            const currentDay = data[i];
            const periodData = data.slice(i - period + 1, i + 1);
            const highestHigh = Math.max(...periodData.map(p => p.high));
            const lowestLow = Math.min(...periodData.map(p => p.low));
            let kValue = null;
            if (highestHigh > lowestLow) {
                kValue = ((currentDay.close - lowestLow) / (highestHigh - lowestLow)) * 100;
            }
            stochasticValues.push({ date: currentDay.date, value: kValue });
        }
        return stochasticValues;
    };
    const calculateEMA = (data, period) => {
        const k = 2 / (period + 1);
        const emaArray = Array(data.length).fill(null);
        const firstValidIndex = data.findIndex(d => d !== null);
        if (firstValidIndex === -1 || data.length < firstValidIndex + period) {
            return emaArray;
        }
        let sma = 0;
        for (let i = firstValidIndex; i < firstValidIndex + period; i++) {
            sma += data[i];
        }
        let ema = sma / period;
        emaArray[firstValidIndex + period - 1] = ema;
        for (let i = firstValidIndex + period; i < data.length; i++) {
            if (data[i] !== null) {
                ema = (data[i] - ema) * k + ema;
                emaArray[i] = ema;
            }
        }
        return emaArray;
    };
    const calculateRSI = (data, period = 14) => {
        const rsiValues = [];
        if (data.length <= period)
            return Array(data.length).fill(null).map((_, i) => ({ date: data[i].date, value: null }));
        let gains = 0;
        let losses = 0;
        for (let i = 1; i <= period; i++) {
            const change = data[i].close - data[i - 1].close;
            if (change > 0)
                gains += change;
            else
                losses -= change;
        }
        let avgGain = gains / period;
        let avgLoss = losses / period;
        for (let i = 0; i < period; i++) {
            rsiValues.push({ date: data[i].date, value: null });
        }
        let rs = avgLoss > 0 ? avgGain / avgLoss : Infinity;
        rsiValues.push({ date: data[period].date, value: 100 - (100 / (1 + rs)) });
        for (let i = period + 1; i < data.length; i++) {
            const change = data[i].close - data[i - 1].close;
            const currentGain = change > 0 ? change : 0;
            const currentLoss = change < 0 ? -change : 0;
            avgGain = (avgGain * (period - 1) + currentGain) / period;
            avgLoss = (avgLoss * (period - 1) + currentLoss) / period;
            rs = avgLoss > 0 ? avgGain / avgLoss : Infinity;
            rsiValues.push({ date: data[i].date, value: 100 - (100 / (1 + rs)) });
        }
        return rsiValues;
    };
    const calculateMACD = (data, shortPeriod = 12, longPeriod = 26, signalPeriod = 9) => {
        const emaShort = calculateEMA(data, shortPeriod);
        const emaLong = calculateEMA(data, longPeriod);
        const macdLine = Array(data.length).fill(null);
        for (let i = 0; i < data.length; i++) {
            if (emaShort[i] !== null && emaLong[i] !== null) {
                macdLine[i] = emaShort[i] - emaLong[i];
            }
        }
        const signalLine = calculateEMA(macdLine, signalPeriod);
        const histogram = macdLine.map((macdVal, i) => {
            const signalVal = signalLine[i];
            if (macdVal !== null && signalVal !== null) {
                return macdVal - signalVal;
            }
            return null;
        });
        return { macdLine, signalLine, histogram };
    };
    const getHistoryFromCache = (isinCd) => {
        return etfHistoryCache.get(isinCd) || null;
    };
    const calculateDailyMomentum = (dailyData, weights, excludeRecentMonth) => {
        // We need at least 6 months of data + a buffer. ~130 trading days in 6 months.
        if (dailyData.length < 130) {
            return [];
        }
        const momentumResults = [];
        const dateToIndexMap = new Map();
        dailyData.forEach((d, i) => dateToIndexMap.set(d.date, i));
        const parseDateString = (dateStr) => new Date(parseInt(dateStr.substring(0, 4)), parseInt(dateStr.substring(4, 6)) - 1, parseInt(dateStr.substring(6, 8)));
        // Find the closest trading day on or before targetDate by checking up to 7 calendar days back
        const findLookbackIndex = (targetDate) => {
            for (let j = 0; j < 7; j++) {
                const checkDate = new Date(targetDate);
                checkDate.setDate(checkDate.getDate() - j);
                const checkDateStr = formatDate(checkDate);
                if (dateToIndexMap.has(checkDateStr)) {
                    return dateToIndexMap.get(checkDateStr);
                }
            }
            return -1;
        };
        for (let i = 0; i < dailyData.length; i++) {
            const currentDay = dailyData[i];
            const currentDate = parseDateString(currentDay.date);
            // When excluding the most recent month, anchor every lookback window one
            // month earlier so the reversal-prone last month never enters the score.
            let anchorIndex = i;
            if (excludeRecentMonth) {
                const anchorDate = new Date(currentDate);
                anchorDate.setDate(anchorDate.getDate() - 30);
                anchorIndex = findLookbackIndex(anchorDate);
            }
            if (anchorIndex === -1) {
                momentumResults.push({ date: currentDay.date, score: null });
                continue;
            }
            const anchorDate = parseDateString(dailyData[anchorIndex].date);
            const anchorPrice = dailyData[anchorIndex].close;
            // Use calendar days for period calculation
            const periods = [
                { days: 7, weight: weights.w1w },
                { days: 14, weight: weights.w2w },
                { days: 30, weight: weights.w1m }, // 1 month
                { days: 90, weight: weights.w3m }, // 3 months
                { days: 180, weight: weights.w6m }, // 6 months
                { days: 360, weight: weights.w12m }, // 12 months
            ];
            const returns = [];
            let canCalculate = true;
            for (const period of periods) {
                const pastDate = new Date(anchorDate);
                pastDate.setDate(pastDate.getDate() - period.days);
                const lookbackIndex = findLookbackIndex(pastDate);
                if (lookbackIndex !== -1) {
                    const pastPrice = dailyData[lookbackIndex].close;
                    if (pastPrice && anchorPrice && pastPrice > 0) {
                        returns.push(((anchorPrice - pastPrice) / pastPrice) * 100);
                    }
                    else {
                        returns.push(null);
                    }
                }
                else {
                    returns.push(null);
                    canCalculate = false;
                }
            }
            if (canCalculate && !returns.some(r => r === null)) {
                const score = (returns[0] * periods[0].weight) +
                    (returns[1] * periods[1].weight) +
                    (returns[2] * periods[2].weight) +
                    (returns[3] * periods[3].weight) +
                    (returns[4] * periods[4].weight) +
                    (returns[5] * periods[5].weight);
                momentumResults.push({ date: currentDay.date, score });
            }
            else {
                momentumResults.push({ date: currentDay.date, score: null });
            }
        }
        const firstValidIndex = momentumResults.findIndex(r => r.score !== null);
        return firstValidIndex > -1 ? momentumResults.slice(firstValidIndex) : [];
    };
    const fetchAndDrawCharts = async (isinCd) => {
        const apiKey = apiKeyInput.value.trim();
        if (!apiKey)
            return;
        const STOCHASTIC_PERIOD = 14;
        const priceVolumeContainer = document.getElementById('price-volume-chart-container');
        const momentumContainer = document.getElementById('momentum-chart-container');
        const stochasticContainer = document.getElementById('stochastic-chart-container');
        const rsiContainer = document.getElementById('rsi-chart-container');
        const macdContainer = document.getElementById('macd-chart-container');
        const allChartContainers = [priceVolumeContainer, momentumContainer, stochasticContainer, rsiContainer, macdContainer];
        const showChartLoader = (container) => {
            if (container)
                container.innerHTML = `<div class="loader"></div>`;
        };
        const showChartError = (message) => {
            if (priceVolumeContainer)
                priceVolumeContainer.innerHTML = `<div class="chart-error">${message}</div>`;
            if (momentumContainer)
                momentumContainer.innerHTML = ``;
            if (stochasticContainer)
                stochasticContainer.innerHTML = ``;
            if (rsiContainer)
                rsiContainer.innerHTML = ``;
            if (macdContainer)
                macdContainer.innerHTML = ``;
        };
        const drawChartsFromHistory = (dailyResults, source, daysToDisplay) => {
            console.log(`Drawing charts for ${isinCd} from ${source} data (${dailyResults.length} items), showing last ${daysToDisplay} trading days`);
            const uniqueDailyResults = Array.from(new Map(dailyResults.map(item => [item.basDt, item])).values())
                .sort((a, b) => a.basDt.localeCompare(b.basDt));
            if (uniqueDailyResults.length < STOCHASTIC_PERIOD) {
                throw new Error('차트 데이터를 그리기에 충분한 데이터가 없습니다.');
            }
            const hasPrecalculatedIndicators = uniqueDailyResults[0] && uniqueDailyResults[0].stochastic_k !== undefined;
            const priceHistoryForCalc = uniqueDailyResults.map(item => ({
                date: item.basDt,
                high: parseFloat(item.hipr),
                low: parseFloat(item.lopr),
                close: parseFloat(item.clpr),
                volume: parseInt(item.trqu, 10),
            }));
            let dailyStochastic, dailyRsiData, dailyMacdData;
            if (hasPrecalculatedIndicators) {
                console.log("Using pre-calculated indicators from cache.");
                const fullDataMap = new Map(uniqueDailyResults.map(item => [item.basDt, item]));
                dailyStochastic = priceHistoryForCalc.map(d => ({ date: d.date, value: fullDataMap.get(d.date)?.stochastic_k ?? null }));
                dailyRsiData = priceHistoryForCalc.map(d => ({ date: d.date, value: fullDataMap.get(d.date)?.rsi ?? null }));
                dailyMacdData = {
                    macdLine: priceHistoryForCalc.map((d) => fullDataMap.get(d.date)?.macd ?? null),
                    signalLine: priceHistoryForCalc.map((d) => fullDataMap.get(d.date)?.macd_signal ?? null),
                    histogram: priceHistoryForCalc.map((d) => fullDataMap.get(d.date)?.macd_hist ?? null),
                };
            }
            else {
                console.log("Calculating indicators on the fly.");
                dailyStochastic = calculateStochastic(priceHistoryForCalc, STOCHASTIC_PERIOD);
                dailyRsiData = calculateRSI(priceHistoryForCalc);
                dailyMacdData = calculateMACD(priceHistoryForCalc.map((d) => d.close));
            }
            // Daily momentum calculation
            const parseWeight = (input, fallback) => {
                const value = parseFloat(input.value);
                return isNaN(value) ? fallback : value;
            };
            const weights = {
                w1w: parseWeight(weight1wInput, 0),
                w2w: parseWeight(weight2wInput, 0),
                w1m: parseWeight(weight1mInput, 0),
                w3m: parseWeight(weight3mInput, 0),
                w6m: parseWeight(weight6mInput, 0),
                w12m: parseWeight(weight12mInput, 0),
            };
            const dailyMomentumData = calculateDailyMomentum(priceHistoryForCalc, weights, excludeRecentMonthInput.checked);
            const weeklyData = aggregateToWeekly(priceHistoryForCalc);
            const weeklyStochastic = calculateStochastic(weeklyData, STOCHASTIC_PERIOD);
            const weeklyRsiData = calculateRSI(weeklyData);
            const weeklyMacdData = calculateMACD(weeklyData.map((d) => d.close));
            const displayDailyData = priceHistoryForCalc.slice(-daysToDisplay);
            const labels = displayDailyData.map(d => `${d.date.substring(4, 6)}-${d.date.substring(6, 8)}`);
            const priceData = displayDailyData.map(d => d.close);
            const volumeData = displayDailyData.map(d => d.volume);
            const dailyMomentumMap = new Map(dailyMomentumData.map(d => [d.date, d.score]));
            const alignedDailyMomentum = displayDailyData.map(d => dailyMomentumMap.get(d.date) ?? null);
            const dailyStochasticMap = new Map(dailyStochastic.map(d => [d.date, d.value]));
            const alignedDailyStochastic = displayDailyData.map(d => dailyStochasticMap.get(d.date) ?? null);
            const weeklyStochasticMap = new Map(weeklyStochastic.map(d => [d.date, d.value]));
            let lastWeeklyValue = null;
            const alignedWeeklyStochastic = displayDailyData.map(d => {
                if (weeklyStochasticMap.has(d.date)) {
                    lastWeeklyValue = weeklyStochasticMap.get(d.date) ?? null;
                }
                return lastWeeklyValue;
            });
            const dailyRsiMap = new Map(dailyRsiData.map(d => [d.date, d.value]));
            const alignedDailyRsi = displayDailyData.map(d => dailyRsiMap.get(d.date) ?? null);
            const weeklyRsiMap = new Map(weeklyRsiData.map(d => [d.date, d.value]));
            let lastWeeklyRsiValue = null;
            const alignedWeeklyRsi = displayDailyData.map(d => {
                if (weeklyRsiMap.has(d.date)) {
                    lastWeeklyRsiValue = weeklyRsiMap.get(d.date) ?? null;
                }
                return lastWeeklyRsiValue;
            });
            const dailyMacdMap = new Map(priceHistoryForCalc.map((d, i) => [d.date, { macd: dailyMacdData.macdLine[i], signal: dailyMacdData.signalLine[i], hist: dailyMacdData.histogram[i] }]));
            const alignedDailyMacd = displayDailyData.map(d => dailyMacdMap.get(d.date) ?? { macd: null, signal: null, hist: null });
            const alignedDailyMacdLine = alignedDailyMacd.map((d) => d.macd);
            const alignedDailySignalLine = alignedDailyMacd.map((d) => d.signal);
            const alignedHistogram = alignedDailyMacd.map((d) => d.hist);
            const weeklyMacdMap = new Map(weeklyData.map((d, i) => [d.date, { macd: weeklyMacdData.macdLine[i], signal: weeklyMacdData.signalLine[i] }]));
            let lastWeeklyMacd = { macd: null, signal: null };
            const alignedWeeklyMacd = displayDailyData.map(d => {
                if (weeklyMacdMap.has(d.date)) {
                    const newMacd = weeklyMacdMap.get(d.date);
                    if (newMacd) {
                        lastWeeklyMacd = { macd: newMacd.macd ?? null, signal: newMacd.signal ?? null };
                    }
                }
                return lastWeeklyMacd;
            });
            const alignedWeeklyMacdLine = alignedWeeklyMacd.map((d) => d.macd);
            const alignedWeeklySignalLine = alignedWeeklyMacd.map((d) => d.signal);
            Object.values(charts).forEach(chart => chart?.destroy());
            // Clear loaders and add back canvas elements
            if (priceVolumeContainer)
                priceVolumeContainer.innerHTML = `<h4>가격 &amp; 거래량</h4><canvas id="price-volume-chart"></canvas>`;
            if (momentumContainer)
                momentumContainer.innerHTML = `<h4>일일 모멘텀 점수</h4><canvas id="momentum-chart"></canvas>`;
            if (stochasticContainer)
                stochasticContainer.innerHTML = `<h4>스토캐스틱 (일/주)</h4><canvas id="stochastic-chart"></canvas>`;
            if (rsiContainer)
                rsiContainer.innerHTML = `<h4>RSI (일/주)</h4><canvas id="rsi-chart"></canvas>`;
            if (macdContainer)
                macdContainer.innerHTML = `<h4>MACD (일/주)</h4><canvas id="macd-chart"></canvas>`;
            const commonOptions = {
                responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
                plugins: { legend: { display: true, position: 'bottom', labels: { font: { size: 10 }, boxWidth: 20 } }, tooltip: { enabled: true } }
            };
            // Price & Volume Chart
            const priceVolumeCtx = document.getElementById('price-volume-chart')?.getContext('2d');
            if (priceVolumeCtx) {
                charts.priceVolume = new Chart(priceVolumeCtx, {
                    type: 'bar',
                    data: {
                        labels,
                        datasets: [{
                                type: 'line',
                                label: '종가',
                                data: priceData,
                                borderColor: 'rgb(54, 162, 235)',
                                yAxisID: 'y',
                                tension: 0.1,
                                pointRadius: 0,
                            }, {
                                label: '거래량',
                                data: volumeData,
                                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                                yAxisID: 'y1',
                            }]
                    },
                    options: { ...commonOptions, scales: {
                            x: { ticks: { display: false } },
                            y: { type: 'linear', position: 'left', display: true, grace: '5%', ticks: { display: true, font: { size: 10 } } },
                            y1: {
                                type: 'linear', position: 'right', display: true,
                                ticks: { display: true, font: { size: 10 }, callback: value => new Intl.NumberFormat('ko-KR', { notation: 'compact', compactDisplay: 'short' }).format(Number(value)) },
                                grid: { drawOnChartArea: false },
                            }
                        }
                    }
                });
            }
            // Momentum Chart
            const momentumCtx = document.getElementById('momentum-chart')?.getContext('2d');
            if (momentumCtx) {
                charts.momentum = new Chart(momentumCtx, {
                    type: 'line',
                    data: {
                        labels,
                        datasets: [{
                                label: '모멘텀 점수',
                                data: alignedDailyMomentum,
                                tension: 0.1,
                                pointRadius: 0,
                                borderWidth: 2,
                                segment: {
                                    borderColor: (ctx) => {
                                        if (ctx.p0.raw === null || ctx.p1.raw === null)
                                            return undefined;
                                        return ctx.p1.raw >= 0 ? 'rgba(224, 49, 49, 0.8)' : 'rgba(25, 113, 194, 0.8)';
                                    }
                                },
                            }]
                    },
                    options: { ...commonOptions,
                        plugins: { ...commonOptions.plugins, legend: { display: false } },
                        scales: {
                            x: { ticks: { display: false } },
                            y: { display: true, ticks: { display: true, font: { size: 10 } } }
                        }
                    }
                });
            }
            // Stochastic Chart
            const stochasticCtx = document.getElementById('stochastic-chart')?.getContext('2d');
            if (stochasticCtx) {
                // Fix: Removed specific generics to let Chart.js infer types correctly and avoid compatibility errors
                charts.stochastic = new Chart(stochasticCtx, {
                    type: 'line',
                    data: {
                        labels,
                        datasets: [{
                                label: '일봉 %K', data: alignedDailyStochastic, borderColor: 'rgb(255, 99, 132)',
                                tension: 0.1, pointRadius: 1,
                            }, {
                                label: '주봉 %K', data: alignedWeeklyStochastic, borderColor: 'rgb(153, 102, 255)',
                                tension: 0.1, pointRadius: 1,
                            }]
                    },
                    options: { ...commonOptions, scales: {
                            x: { ticks: { display: false } },
                            y: { min: 0, max: 100, display: true, ticks: { display: true, stepSize: 20, font: { size: 10 } } }
                        },
                        plugins: { ...commonOptions.plugins, tooltip: { enabled: true, callbacks: { label: (context) => `${context.dataset.label}: ${context.parsed.y?.toFixed(2)}` } } }
                    }
                });
            }
            // RSI Chart
            const rsiCtx = document.getElementById('rsi-chart')?.getContext('2d');
            if (rsiCtx) {
                // Fix: Removed specific generics to let Chart.js infer types correctly and avoid compatibility errors
                charts.rsi = new Chart(rsiCtx, {
                    type: 'line',
                    data: {
                        labels,
                        datasets: [{
                                label: '일봉 RSI', data: alignedDailyRsi, borderColor: 'rgb(255, 159, 64)',
                                tension: 0.1, pointRadius: 1
                            }, {
                                label: '주봉 RSI', data: alignedWeeklyRsi, borderColor: 'rgb(153, 102, 255)',
                                tension: 0.1, pointRadius: 1
                            }]
                    },
                    options: { ...commonOptions, scales: {
                            x: { ticks: { display: false } },
                            y: { min: 0, max: 100, display: true, ticks: { display: true, stepSize: 10, font: { size: 10 } },
                                grid: { color: context => (context.tick.value === 30 || context.tick.value === 70) ? 'rgba(255, 99, 132, 0.5)' : 'rgba(0, 0, 0, 0.1)' }
                            }
                        },
                        plugins: { ...commonOptions.plugins, tooltip: { enabled: true, callbacks: { label: (context) => `${context.dataset.label}: ${context.parsed.y?.toFixed(2)}` } } }
                    }
                });
            }
            // MACD Chart
            const macdCtx = document.getElementById('macd-chart')?.getContext('2d');
            if (macdCtx) {
                charts.macd = new Chart(macdCtx, {
                    type: 'bar',
                    data: {
                        labels,
                        datasets: [
                            { label: '히스토그램 (일)', data: alignedHistogram, backgroundColor: alignedHistogram.map(v => (v ?? 0) > 0 ? 'rgba(255, 99, 132, 0.5)' : 'rgba(54, 162, 235, 0.5)') },
                            { type: 'line', label: 'MACD (일)', data: alignedDailyMacdLine, borderColor: 'rgb(75, 192, 192)', tension: 0.1, pointRadius: 0 },
                            { type: 'line', label: '시그널 (일)', data: alignedDailySignalLine, borderColor: 'rgb(255, 205, 86)', tension: 0.1, pointRadius: 0 },
                            { type: 'line', label: 'MACD (주)', data: alignedWeeklyMacdLine, borderColor: 'rgb(28, 93, 93)', tension: 0.1, pointRadius: 0, borderDash: [5, 5] },
                            { type: 'line', label: '시그널 (주)', data: alignedWeeklySignalLine, borderColor: 'rgb(204, 158, 26)', tension: 0.1, pointRadius: 0, borderDash: [5, 5] }
                        ]
                    },
                    options: { ...commonOptions, scales: {
                            x: { ticks: { font: { size: 10 }, maxRotation: 0, autoSkipPadding: 30 } },
                            y: { display: true, ticks: { display: true, font: { size: 10 } } }
                        }
                    }
                });
            }
            // Synchronize tooltips and align chart axes
            if (charts.priceVolume && charts.momentum && charts.stochastic && charts.rsi && charts.macd) {
                // Fix: Cast to any[] to handle synchronized tooltip logic across multiple chart instances without type conflicts
                const allCharts = Object.values(charts).filter(Boolean);
                // Tooltip Synchronization Logic
                if (allCharts.length > 1) {
                    let lastHoveredIndex = null;
                    const syncTooltips = (event) => {
                        const sourceChart = Chart.getChart(event.target);
                        if (!sourceChart)
                            return;
                        const activeElements = sourceChart.getElementsAtEventForMode(event, 'index', { intersect: false }, true);
                        const currentIndex = activeElements.length > 0 ? activeElements[0].index : null;
                        if (currentIndex !== lastHoveredIndex) {
                            lastHoveredIndex = currentIndex;
                            allCharts.forEach(targetChart => {
                                if (!targetChart.tooltip)
                                    return;
                                if (currentIndex !== null) {
                                    const targetActiveElements = targetChart.data.datasets
                                        .map((dataset, datasetIndex) => ({ datasetIndex, index: currentIndex }))
                                        .filter((element) => {
                                        const meta = targetChart.getDatasetMeta(element.datasetIndex);
                                        return meta.data[element.index] !== undefined;
                                    });
                                    targetChart.tooltip.setActiveElements(targetActiveElements, event);
                                }
                                else {
                                    targetChart.tooltip.setActiveElements([], { x: 0, y: 0 });
                                }
                                targetChart.update('none');
                            });
                        }
                    };
                    const clearAllTooltips = () => {
                        if (lastHoveredIndex !== null) {
                            lastHoveredIndex = null;
                            allCharts.forEach(chart => {
                                if (chart.tooltip) {
                                    chart.tooltip.setActiveElements([], { x: 0, y: 0 });
                                    chart.update('none');
                                }
                            });
                        }
                    };
                    allCharts.forEach(chart => {
                        chart.canvas.addEventListener('mousemove', syncTooltips);
                        chart.canvas.addEventListener('mouseleave', clearAllTooltips);
                    });
                }
                // Align chart axes
                setTimeout(() => {
                    if (allCharts.length < 5)
                        return;
                    const allScalesAvailable = allCharts.every(c => c.scales && c.scales.x && c.scales.y);
                    if (!allScalesAvailable) {
                        console.warn("Chart scales could not be aligned because an axis failed to render.");
                        return;
                    }
                    const maxLeftWidth = Math.max(...allCharts.map(c => c.scales.y.width));
                    const maxRightWidth = Math.max(0, ...allCharts.map(c => c.scales.y1?.width || 0));
                    const maxXHeight = Math.max(...allCharts.map(c => c.scales.x.height));
                    if (maxLeftWidth > 0 && maxXHeight > 0) {
                        allCharts.forEach(chart => {
                            if (!chart.options.scales)
                                chart.options.scales = {};
                            if (chart.options.scales.y) {
                                chart.options.scales.y.afterFit = (scale) => { scale.width = maxLeftWidth; };
                            }
                            if (chart.scales.y1 && chart.options.scales.y1) {
                                chart.options.scales.y1.afterFit = (scale) => { scale.width = maxRightWidth; };
                            }
                            else {
                                if (!chart.options.layout)
                                    chart.options.layout = {};
                                const currentPadding = chart.options.layout.padding;
                                let paddingAsObject = {};
                                if (typeof currentPadding === 'number') {
                                    paddingAsObject = { top: currentPadding, right: currentPadding, bottom: currentPadding, left: currentPadding };
                                }
                                else if (typeof currentPadding === 'object' && currentPadding !== null) {
                                    if ('top' in currentPadding || 'right' in currentPadding || 'bottom' in currentPadding || 'left' in currentPadding) {
                                        paddingAsObject = currentPadding;
                                    }
                                }
                                chart.options.layout.padding = { ...paddingAsObject, right: maxRightWidth };
                            }
                            if (chart.options.scales.x) {
                                chart.options.scales.x.afterFit = (scale) => { scale.height = maxXHeight; };
                            }
                        });
                        allCharts.forEach(c => c.update());
                    }
                }, 100);
            }
        };
        // --- Main Execution Flow ---
        let renderedFromCache = false;
        try {
            const cachedHistory = getHistoryFromCache(isinCd);
            if (cachedHistory && cachedHistory.length > STOCHASTIC_PERIOD) {
                drawChartsFromHistory(cachedHistory, 'Cache', currentChartPeriodDays);
                activeChartRedraw = drawChartsFromHistory;
                activeChartHistory = cachedHistory;
                activeChartSource = 'Cache';
                renderedFromCache = true;
                renderPerformanceSummary(cachedHistory);
            }
        }
        catch (cacheError) {
            console.warn("Failed to draw charts from cache:", cacheError);
            // Fall through to API fetch
        }
        if (!renderedFromCache) {
            allChartContainers.forEach(showChartLoader);
        }
        try {
            const baseDate = new Date(baseDateInput.value);
            const endDate = new Date(baseDate);
            const beginDate = new Date(baseDate);
            const DAYS_TO_FETCH = 550; // extra buffer beyond 1 year so the 12-month lookback has data to compare against
            beginDate.setDate(beginDate.getDate() - DAYS_TO_FETCH);
            const apiHistory = await fetchHistoryWithChunking(apiKey, isinCd, beginDate, endDate);
            if (!apiHistory || apiHistory.length === 0) {
                if (!renderedFromCache) {
                    throw new Error('해당 기간의 가격 데이터를 찾을 수 없습니다. API가 응답하지 않거나 데이터가 없습니다.');
                }
                console.warn("API fetch for chart update returned no data. Sticking with cached version.");
                return;
            }
            drawChartsFromHistory(apiHistory, 'API', currentChartPeriodDays);
            activeChartRedraw = drawChartsFromHistory;
            activeChartHistory = apiHistory;
            activeChartSource = 'API';
            renderPerformanceSummary(apiHistory);
        }
        catch (apiError) {
            console.error("Failed to fetch or draw charts from API:", apiError);
            if (!renderedFromCache) {
                const errorMessage = (apiError instanceof Error) ? apiError.message : '차트 데이터를 불러오지 못했습니다.';
                showChartError(errorMessage);
            }
        }
    };
    const redrawChartsForPeriod = (days) => {
        currentChartPeriodDays = days;
        const periodButtons = document.querySelectorAll('.chart-period-button');
        periodButtons.forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.periodDays, 10) === days);
        });
        if (activeChartRedraw && activeChartHistory) {
            try {
                activeChartRedraw(activeChartHistory, activeChartSource, currentChartPeriodDays);
            }
            catch (error) {
                console.error('Failed to redraw charts for selected period:', error);
            }
        }
    };
    // --- Performance Summary (computed from already-fetched price history; no extra API calls) ---
    const buildDailyCloseSeries = (dailyResults) => {
        const uniqueDailyResults = Array.from(new Map(dailyResults.map(item => [item.basDt, item])).values())
            .sort((a, b) => a.basDt.localeCompare(b.basDt));
        return uniqueDailyResults
            .map(item => ({ date: item.basDt, close: parseFloat(item.clpr) }))
            .filter(d => isFinite(d.close) && d.close > 0);
    };
    const computePerformanceSummary = (dailySeries) => {
        if (dailySeries.length < 2)
            return null;
        const lastClose = dailySeries[dailySeries.length - 1].close;
        const periods = [
            { label: '1개월', days: 21 },
            { label: '3개월', days: 63 },
            { label: '6개월', days: 126 },
            { label: '1년', days: 250 },
        ];
        const returns = periods.map(p => {
            const idx = dailySeries.length - 1 - p.days;
            if (idx < 0)
                return null;
            const pastClose = dailySeries[idx].close;
            if (!pastClose)
                return null;
            return ((lastClose - pastClose) / pastClose) * 100;
        });
        const perfWindow = dailySeries.slice(-DEFAULT_CHART_PERIOD_DAYS);
        const dailyReturns = [];
        for (let i = 1; i < perfWindow.length; i++) {
            const prev = perfWindow[i - 1].close;
            const curr = perfWindow[i].close;
            if (prev && curr) {
                dailyReturns.push((curr - prev) / prev);
            }
        }
        let volatility = null;
        if (dailyReturns.length > 1) {
            const mean = dailyReturns.reduce((a, b) => a + b, 0) / dailyReturns.length;
            const variance = dailyReturns.reduce((sum, r) => sum + Math.pow(r - mean, 2), 0) / (dailyReturns.length - 1);
            volatility = Math.sqrt(variance) * Math.sqrt(252) * 100;
        }
        const baseClose = perfWindow[0]?.close;
        const perfSeries = baseClose
            ? perfWindow.map(d => ({ date: d.date, value: ((d.close - baseClose) / baseClose) * 100 }))
            : [];
        return {
            periods: periods.map((p, i) => ({ label: p.label, value: returns[i] })),
            volatility,
            perfSeries,
        };
    };
    const renderPerformanceSummary = (dailyResults) => {
        const performanceTable = document.getElementById('performance-table');
        const performanceTableBody = document.getElementById('performance-table-body');
        const performanceEmpty = document.getElementById('performance-empty');
        const performanceChartContainer = document.getElementById('performance-chart-container');
        if (!performanceTable || !performanceTableBody || !performanceEmpty || !performanceChartContainer)
            return;
        const dailySeries = buildDailyCloseSeries(dailyResults);
        const summary = computePerformanceSummary(dailySeries);
        performanceChart?.destroy();
        performanceChart = null;
        if (!summary) {
            performanceTable.classList.add('hidden');
            performanceEmpty.classList.remove('hidden');
            performanceChartContainer.innerHTML = '';
            return;
        }
        performanceEmpty.classList.add('hidden');
        performanceTableBody.innerHTML = '';
        const row = document.createElement('tr');
        let rowHtml = '<td>운용성과(%)</td>';
        summary.periods.forEach(p => {
            rowHtml += p.value === null ? '<td>N/A</td>' : `<td class="${getChangeClass(p.value)}">${p.value.toFixed(2)}%</td>`;
        });
        rowHtml += summary.volatility === null ? '<td>N/A</td>' : `<td>${summary.volatility.toFixed(2)}%</td>`;
        row.innerHTML = rowHtml;
        performanceTableBody.appendChild(row);
        performanceTable.classList.remove('hidden');
        if (summary.perfSeries.length > 1) {
            performanceChartContainer.innerHTML = `<h4>성과 그래프 (최근 1년, 기간 시작일 대비 누적수익률 %)</h4><canvas id="performance-chart"></canvas>`;
            const ctx = document.getElementById('performance-chart')?.getContext('2d');
            if (ctx) {
                performanceChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: summary.perfSeries.map(d => `${d.date.substring(4, 6)}-${d.date.substring(6, 8)}`),
                        datasets: [{
                                label: '누적수익률(%)',
                                data: summary.perfSeries.map(d => d.value),
                                tension: 0.1,
                                pointRadius: 0,
                                borderWidth: 2,
                                segment: {
                                    borderColor: (ctx2) => {
                                        if (ctx2.p0.raw === null || ctx2.p1.raw === null)
                                            return undefined;
                                        return ctx2.p1.raw >= 0 ? 'rgba(224, 49, 49, 0.8)' : 'rgba(25, 113, 194, 0.8)';
                                    }
                                },
                            }]
                    },
                    options: {
                        responsive: true, maintainAspectRatio: false,
                        plugins: { legend: { display: false }, tooltip: { enabled: true, callbacks: { label: (c) => `${c.parsed.y?.toFixed(2)}%` } } },
                        scales: {
                            x: { ticks: { font: { size: 10 }, maxRotation: 0, autoSkipPadding: 30 } },
                            y: { ticks: { display: true, font: { size: 10 }, callback: (v) => `${v}%` } }
                        }
                    }
                });
            }
        }
        else {
            performanceChartContainer.innerHTML = '';
        }
    };
    const renderRow = (item, index) => {
        const row = document.createElement('tr');
        const currentRank = item.originalRank ?? (index !== undefined ? index + 1 : '');
        const pastRank = item.pastRank;
        let rankChangeHtml;
        if (item.originalRank === undefined) {
            rankChangeHtml = `<td>-</td>`;
        }
        else if (pastRank === undefined) {
            rankChangeHtml = `<td class="neutral">(New)</td>`;
        }
        else {
            const diff = pastRank - currentRank;
            if (diff > 0) {
                rankChangeHtml = `<td class="positive">▲ ${diff}</td>`;
            }
            else if (diff < 0) {
                rankChangeHtml = `<td class="negative">▼ ${Math.abs(diff)}</td>`;
            }
            else {
                rankChangeHtml = `<td class="neutral">-</td>`;
            }
        }
        const change = parseFloat(item.vs);
        const rate = parseFloat(item.fltRt);
        const sector = sectorMap.get(item.srtnCd) || '기타';
        const sectorColor = SECTOR_COLORS[sector] || '#999999';
        let momentumCells = '';
        item.returns.forEach((momentum) => {
            if (momentum !== null) {
                momentumCells += `<td class="${getChangeClass(momentum)}">${momentum.toFixed(2)}%</td>`;
            }
            else {
                momentumCells += `<td>N/A</td>`;
            }
        });
        let momentumScoreCell = '<td>N/A</td>';
        if (item.momentumScore !== null && isFinite(item.momentumScore)) {
            momentumScoreCell = `<td class="${getChangeClass(item.momentumScore)}">${item.momentumScore.toFixed(2)}</td>`;
        }
        row.innerHTML = `
            <td>${currentRank}</td>
            ${rankChangeHtml}
            <td class="item-name-clickable" data-item-name="${item.itmsNm}" data-isin-cd="${item.isinCd}" role="button" tabindex="0" style="color: ${sectorColor};">${item.itmsNm}</td>
            <td>${formatNumber(item.clpr)}</td>
            <td class="${getChangeClass(change)}">${change > 0 ? '▲' : ''}${change < 0 ? '▼' : ''} ${formatNumber(change)}</td>
            <td class="${getChangeClass(rate)}">${rate.toFixed(2)}%</td>
            ${momentumScoreCell}
            ${momentumCells}
            <td>${formatNumber(item.nav)}</td>
            <td>${formatLargeNumber(item.trqu, 10000)}</td>
            <td>${formatLargeNumber(item.trPrc, 100000000)}</td>
            <td>${formatLargeNumber(item.mrktTotAmt, 100000000)}</td>
            <td>${item.basDt}</td>
        `;
        return row;
    };
    const renderResults = () => {
        if (!tableBody || !sectorSummary || !sectorLegend || !newEtfsContainer)
            return;
        newEtfsContainer.classList.add('hidden');
        tableBody.innerHTML = '';
        sectorSummary.innerHTML = '';
        sectorLegend.innerHTML = '';
        if (allRankedEtfs.length === 0) {
            tableContainer.classList.add('hidden');
            sectorLegend.classList.add('hidden');
            return;
        }
        const uniqueEtfsForSectorCount = Array.from(new Map(allRankedEtfs.map(item => [item.srtnCd, item])).values());
        const sectorCounts = {};
        uniqueEtfsForSectorCount.forEach(item => {
            const sector = sectorMap.get(item.srtnCd) || '기타';
            sectorCounts[sector] = (sectorCounts[sector] || 0) + 1;
        });
        const summaryHtml = Object.entries(sectorCounts)
            .sort(([, a], [, b]) => b - a)
            .map(([sector, count]) => `<span class="sector-summary-item ${activeSectorFilter === sector ? 'active' : ''}" style="color: ${SECTOR_COLORS[sector]};" data-sector="${sector}" role="button">${sector} ${count}</span>`)
            .join('&nbsp;&nbsp;');
        sectorSummary.innerHTML = `(${summaryHtml})`;
        const legendItemsHtml = SECTORS_LIST
            .filter(sector => sectorCounts[sector] > 0)
            .map(sector => `
            <div class="legend-item ${activeSectorFilter === sector ? 'active' : ''}" data-sector="${sector}" role="button">
                <span class="sector-indicator" style="background-color: ${SECTOR_COLORS[sector]};"></span>
                <span>${sector}</span>
            </div>
        `).join('');
        sectorLegend.innerHTML = `
            <div class="legend-item ${activeSectorFilter === null ? 'active' : ''}" data-sector="ALL" role="button">
                <span>전체 보기</span>
            </div>
            ${legendItemsHtml}
        `;
        sectorLegend.classList.remove('hidden');
        const rankHeader = document.getElementById('rank-header');
        const rankChangeHeader = document.getElementById('rank-change-header');
        if (rankHeader) {
            rankHeader.textContent = `현재 순위 ${currentSortColumn === 'rank' ? (currentSortOrder === 'desc' ? '▼' : '▲') : ''}`;
        }
        if (rankChangeHeader) {
            rankChangeHeader.textContent = `순위 변동 ${currentSortColumn === 'rankChange' ? (currentSortOrder === 'desc' ? '▼' : '▲') : ''}`;
        }
        const displayCount = parseInt(displayCountInput.value, 10) || 20;
        let etfsToConsider = activeSectorFilter
            ? allRankedEtfs.filter(item => (sectorMap.get(item.srtnCd) || '기타') === activeSectorFilter)
            : [...allRankedEtfs];
        // Perform Sorting
        if (currentSortColumn === 'rank') {
            etfsToConsider.sort((a, b) => {
                const valA = a.originalRank ?? 999999;
                const valB = b.originalRank ?? 999999;
                return currentSortOrder === 'desc' ? valA - valB : valB - valA;
            });
        }
        else if (currentSortColumn === 'rankChange') {
            etfsToConsider.sort((a, b) => {
                const diffA = a.pastRank !== undefined ? a.pastRank - a.originalRank : -Infinity;
                const diffB = b.pastRank !== undefined ? b.pastRank - b.originalRank : -Infinity;
                return currentSortOrder === 'desc' ? diffB - diffA : diffA - diffB;
            });
        }
        const etfsToDisplay = etfsToConsider.slice(0, displayCount);
        etfsToDisplay.forEach((item) => {
            tableBody.appendChild(renderRow(item));
        });
        tableContainer.classList.remove('hidden');
    };
    const renderNewEtfs = () => {
        if (!newEtfsTableBody || !newEtfsContainer || !tableContainer)
            return;
        tableContainer.classList.add('hidden');
        newEtfsContainer.classList.remove('hidden');
        newEtfsTableBody.innerHTML = '';
        const sortedNewEtfs = [...newlyListedEtfs].sort((a, b) => a.itmsNm.localeCompare(b.itmsNm));
        sortedNewEtfs.forEach((item, index) => {
            newEtfsTableBody.appendChild(renderRow(item, index));
        });
    };
    // --- Watchlist Logic ---
    const createWatchlistActionCell = (isinCd, isInList) => {
        const td = document.createElement('td');
        const button = document.createElement('button');
        button.type = 'button';
        button.className = isInList ? 'action-button secondary watchlist-toggle-button' : 'action-button watchlist-toggle-button';
        button.dataset.isinCd = isinCd;
        button.dataset.action = isInList ? 'remove' : 'add';
        button.textContent = isInList ? '− 제거' : '★ 추가';
        td.appendChild(button);
        return td;
    };
    const createWatchlistManageCell = (isinCd, index, total) => {
        const td = document.createElement('td');
        td.className = 'watchlist-manage-cell';
        const wrapper = document.createElement('span');
        wrapper.className = 'watchlist-manage-wrapper';
        const upButton = document.createElement('button');
        upButton.type = 'button';
        upButton.className = 'watchlist-move-button';
        upButton.dataset.isinCd = isinCd;
        upButton.dataset.move = 'up';
        upButton.textContent = '▲';
        upButton.setAttribute('aria-label', '위로 이동');
        upButton.disabled = index === 0;
        const downButton = document.createElement('button');
        downButton.type = 'button';
        downButton.className = 'watchlist-move-button';
        downButton.dataset.isinCd = isinCd;
        downButton.dataset.move = 'down';
        downButton.textContent = '▼';
        downButton.setAttribute('aria-label', '아래로 이동');
        downButton.disabled = index === total - 1;
        wrapper.appendChild(upButton);
        wrapper.appendChild(downButton);
        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.className = 'action-button secondary watchlist-toggle-button';
        removeButton.dataset.isinCd = isinCd;
        removeButton.dataset.action = 'remove';
        removeButton.textContent = '− 제거';
        wrapper.appendChild(removeButton);
        td.appendChild(wrapper);
        return td;
    };
    const moveWatchlistItem = (isinCd, direction) => {
        const index = watchlist.findIndex(entry => entry.isinCd === isinCd);
        if (index === -1)
            return;
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= watchlist.length)
            return;
        [watchlist[index], watchlist[targetIndex]] = [watchlist[targetIndex], watchlist[index]];
        saveWatchlist();
        renderWatchlist();
    };
    const saveWatchlist = () => {
        try {
            localStorage.setItem(WATCHLIST_STORAGE_KEY, JSON.stringify(watchlist));
        }
        catch (error) {
            console.error('Failed to save watchlist:', error);
        }
    };
    const loadWatchlist = () => {
        try {
            const raw = localStorage.getItem(WATCHLIST_STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) {
                    watchlist = parsed;
                }
            }
        }
        catch (error) {
            console.error('Failed to load watchlist:', error);
            watchlist = [];
        }
    };
    const isInWatchlist = (isinCd) => watchlist.some(entry => entry.isinCd === isinCd);
    const addToWatchlist = (item) => {
        if (isInWatchlist(item.isinCd))
            return;
        watchlist.push({ isinCd: item.isinCd, itmsNm: item.itmsNm, snapshot: item });
        saveWatchlist();
        renderWatchlist();
        renderStockSearchResults();
    };
    const removeFromWatchlist = (isinCd) => {
        watchlist = watchlist.filter(entry => entry.isinCd !== isinCd);
        saveWatchlist();
        renderWatchlist();
        renderStockSearchResults();
    };
    const exportWatchlist = () => {
        const blob = new Blob([JSON.stringify(watchlist, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `etf_watchlist_backup_${formatDate(new Date())}.json`;
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    const importWatchlistFromFile = async (file) => {
        try {
            const text = await file.text();
            const parsed = JSON.parse(text);
            if (!Array.isArray(parsed)) {
                throw new Error('올바른 백업 파일 형식이 아닙니다.');
            }
            const existingIsinCds = new Set(watchlist.map(entry => entry.isinCd));
            let addedCount = 0;
            for (const entry of parsed) {
                if (entry && typeof entry.isinCd === 'string' && !existingIsinCds.has(entry.isinCd)) {
                    watchlist.push({ isinCd: entry.isinCd, itmsNm: entry.itmsNm || entry.isinCd, snapshot: entry.snapshot || null });
                    existingIsinCds.add(entry.isinCd);
                    addedCount++;
                }
            }
            saveWatchlist();
            renderWatchlist();
            renderStockSearchResults();
            watchlistImportStatus.textContent = `가져오기 완료: 신규 ${addedCount}개 추가 (총 ${watchlist.length}개)`;
            watchlistImportStatus.classList.remove('hidden');
        }
        catch (error) {
            console.error('Failed to import watchlist:', error);
            watchlistImportStatus.textContent = `가져오기 실패: ${error.message}`;
            watchlistImportStatus.classList.remove('hidden');
        }
        setTimeout(() => { watchlistImportStatus.classList.add('hidden'); }, 5000);
    };
    const updateWatchlistSnapshots = () => {
        if (watchlist.length === 0)
            return;
        const latestByIsin = new Map([...allRankedEtfs, ...newlyListedEtfs].map(item => [item.isinCd, item]));
        let changed = false;
        watchlist.forEach(entry => {
            const latest = latestByIsin.get(entry.isinCd);
            if (latest) {
                entry.snapshot = latest;
                entry.itmsNm = latest.itmsNm;
                changed = true;
            }
        });
        if (changed) {
            saveWatchlist();
        }
    };
    const renderWatchlist = () => {
        watchlistTableBody.innerHTML = '';
        if (watchlist.length === 0) {
            watchlistCount.textContent = '';
            watchlistEmpty.classList.remove('hidden');
            watchlistTableContainer.classList.add('hidden');
            return;
        }
        watchlistCount.textContent = `(${watchlist.length})`;
        watchlistEmpty.classList.add('hidden');
        watchlistTableContainer.classList.remove('hidden');
        watchlist.forEach((entry, index) => {
            let row;
            if (entry.snapshot) {
                row = renderRow(entry.snapshot);
            }
            else {
                row = document.createElement('tr');
                const td = document.createElement('td');
                td.colSpan = 18;
                td.style.textAlign = 'center';
                td.textContent = `${entry.itmsNm} — '모멘텀 계산하기'를 실행하면 데이터가 표시됩니다.`;
                row.appendChild(td);
            }
            row.appendChild(createWatchlistManageCell(entry.isinCd, index, watchlist.length));
            watchlistTableBody.appendChild(row);
        });
    };
    // --- Stock Search Logic ---
    const renderStockSearchResults = () => {
        const query = stockSearchInput.value.trim();
        const universe = [...allRankedEtfs, ...newlyListedEtfs];
        if (universe.length === 0) {
            stockSearchHint.classList.remove('hidden');
            stockSearchEmpty.classList.add('hidden');
            stockSearchTableContainer.classList.add('hidden');
            return;
        }
        stockSearchHint.classList.add('hidden');
        if (!query) {
            stockSearchEmpty.classList.add('hidden');
            stockSearchTableContainer.classList.add('hidden');
            stockSearchTableBody.innerHTML = '';
            return;
        }
        const lowerQuery = query.toLowerCase();
        const matches = universe
            .filter(item => item.itmsNm && item.itmsNm.toLowerCase().includes(lowerQuery))
            .slice(0, 30);
        stockSearchTableBody.innerHTML = '';
        if (matches.length === 0) {
            stockSearchEmpty.classList.remove('hidden');
            stockSearchTableContainer.classList.add('hidden');
            return;
        }
        stockSearchEmpty.classList.add('hidden');
        stockSearchTableContainer.classList.remove('hidden');
        matches.forEach(item => {
            const row = renderRow(item);
            row.appendChild(createWatchlistActionCell(item.isinCd, isInWatchlist(item.isinCd)));
            stockSearchTableBody.appendChild(row);
        });
    };
    const calculateAndStoreResults = async () => {
        const apiKey = apiKeyInput.value.trim();
        if (!apiKey) {
            errorOutput.textContent = 'API 키를 입력해주세요.';
            errorOutput.classList.remove('hidden');
            tableContainer.classList.add('hidden');
            return;
        }
        const parseWeight = (input, fallback) => {
            const value = parseFloat(input.value);
            return isNaN(value) ? fallback : value;
        };
        const weights = {
            w1w: parseWeight(weight1wInput, 0),
            w2w: parseWeight(weight2wInput, 0),
            w1m: parseWeight(weight1mInput, 0),
            w3m: parseWeight(weight3mInput, 0),
            w6m: parseWeight(weight6mInput, 0),
            w12m: parseWeight(weight12mInput, 0),
        };
        const weightSum = weights.w1w + weights.w2w + weights.w1m + weights.w3m + weights.w6m + weights.w12m;
        if (Math.abs(weightSum - 100) > 0.001) {
            errorOutput.textContent = `가중치 합계는 100이어야 합니다. 현재 합계: ${weightSum.toFixed(1)}`;
            errorOutput.classList.remove('hidden');
            tableContainer.classList.add('hidden');
            return;
        }
        const filters = {
            minVolume: (parseFloat(minVolumeInput.value) || 0) * 10000,
            minTradeValue: (parseFloat(minTradeValueInput.value) || 0) * 100000000,
        };
        const rankChangePeriod = parseInt(rankChangePeriodInput.value, 10) || 1;
        fetchButton.disabled = true;
        showNewEtfsButton.classList.add('hidden');
        loader.classList.remove('hidden');
        tableContainer.classList.add('hidden');
        if (newEtfsContainer)
            newEtfsContainer.classList.add('hidden');
        errorOutput.classList.add('hidden');
        allRankedEtfs = [];
        newlyListedEtfs = [];
        sectorMap = new Map();
        activeSectorFilter = null;
        renderResults();
        try {
            const dateValue = baseDateInput.value;
            if (!dateValue)
                throw new Error('기준일을 선택해주세요.');
            const dateParts = dateValue.split('-').map(p => parseInt(p, 10));
            const selectedDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
            const pastDate = getPastDate(new Date(selectedDate), 0, rankChangePeriod);
            const [currentData, pastData] = await Promise.all([
                getRankedEtfsForDate(apiKey, selectedDate, weights, filters, excludeRecentMonthInput.checked),
                getRankedEtfsForDate(apiKey, pastDate, weights, filters, excludeRecentMonthInput.checked)
            ]);
            if (!currentData || !currentData.results) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (selectedDate > today) {
                    throw new Error(`선택하신 기준일(${baseDateInput.value})은 미래 날짜이므로 데이터를 조회할 수 없습니다. 오늘 또는 과거 날짜를 선택해주세요.`);
                }
                throw new Error(`기준일(${baseDateInput.value}) 및 이전 5일 동안 데이터를 찾을 수 없습니다. 주말/공휴일이거나 API 키가 유효하지 않을 수 있습니다.`);
            }
            const currentResultsUnsorted = currentData.results;
            const pastResultsUnsorted = pastData ? pastData.results : null;
            const validMomentumEtfs = currentResultsUnsorted.filter(item => item.momentumScore !== null && isFinite(item.momentumScore));
            newlyListedEtfs = currentResultsUnsorted.filter(item => item.momentumScore === null || !isFinite(item.momentumScore));
            if (validMomentumEtfs.length === 0 && newlyListedEtfs.length > 0) {
                throw new Error(`모든 ETF가 신규 상장 종목이거나 데이터가 부족하여 모멘텀 순위를 계산할 수 없습니다. '신규 ETF 보기'를 확인하여 종목을 확인해주세요.`);
            }
            else if (validMomentumEtfs.length === 0) {
                throw new Error(`표시할 ETF 데이터가 없습니다. 기준일 또는 기본 필터 값을 확인해주세요.`);
            }
            const sortedFullRank = [...validMomentumEtfs]
                .sort((a, b) => (b.momentumScore ?? -Infinity) - (a.momentumScore ?? -Infinity));
            const pastRankMap = createRankMap(pastResultsUnsorted);
            allRankedEtfs = sortedFullRank.map((item, index) => ({
                ...item,
                originalRank: index + 1,
                pastRank: pastRankMap.get(item.isinCd)
            }));
            sectorMap = getSectorsForEtfs([...allRankedEtfs, ...newlyListedEtfs]);
            currentSortOrder = 'desc'; // Reset sort order on new calculation
            currentSortColumn = 'rank';
            renderResults();
            updateWatchlistSnapshots();
            renderWatchlist();
            renderStockSearchResults();
            if (newlyListedEtfs.length > 0) {
                showNewEtfsButton.classList.remove('hidden');
                showNewEtfsButton.textContent = `신규 ETF 보기 (${newlyListedEtfs.length})`;
            }
        }
        catch (error) {
            console.error('Error calculating momentum:', error);
            errorOutput.textContent = `오류: ${error.message}`;
            errorOutput.classList.remove('hidden');
        }
        finally {
            fetchButton.disabled = false;
            loader.classList.add('hidden');
        }
    };
    // --- Details Modal Logic ---
    const openModal = (itemName, isinCd) => {
        modalTitle.textContent = itemName;
        modal.dataset.isinCd = isinCd;
        modal.dataset.itemName = itemName;
        // Clear old chart instances
        Object.values(charts).forEach(chart => chart?.destroy());
        charts = {};
        performanceChart?.destroy();
        performanceChart = null;
        // Reset performance summary UI for the newly opened ETF
        const performanceTableReset = document.getElementById('performance-table');
        const performanceTableBodyReset = document.getElementById('performance-table-body');
        const performanceEmptyReset = document.getElementById('performance-empty');
        const performanceChartContainerReset = document.getElementById('performance-chart-container');
        if (performanceTableBodyReset)
            performanceTableBodyReset.innerHTML = '';
        if (performanceTableReset)
            performanceTableReset.classList.add('hidden');
        if (performanceEmptyReset)
            performanceEmptyReset.classList.add('hidden');
        if (performanceChartContainerReset)
            performanceChartContainerReset.innerHTML = '';
        // Reset chart period selection to default for the newly opened ETF
        currentChartPeriodDays = DEFAULT_CHART_PERIOD_DAYS;
        activeChartRedraw = null;
        activeChartHistory = null;
        activeChartSource = null;
        document.querySelectorAll('.chart-period-button').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.periodDays, 10) === DEFAULT_CHART_PERIOD_DAYS);
        });
        // Show modal content area immediately
        modalData.classList.remove('hidden');
        modalLoader.classList.add('hidden');
        modalError.classList.add('hidden');
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        // Immediately start fetching and drawing charts
        fetchAndDrawCharts(isinCd);
        downloadStatus.textContent = '';
    };
    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        delete modal.dataset.isinCd;
        delete modal.dataset.itemName;
        Object.values(charts).forEach(chart => chart?.destroy());
        charts = {};
        performanceChart?.destroy();
        performanceChart = null;
    };
    const handleFilterClick = (event) => {
        const target = event.target;
        const filterItem = target.closest('[data-sector]');
        if (filterItem) {
            const sector = filterItem.getAttribute('data-sector');
            if (sector === 'ALL') {
                activeSectorFilter = null;
            }
            else {
                activeSectorFilter = sector;
            }
            renderResults();
        }
    };
    sectorLegend.addEventListener('click', handleFilterClick);
    sectorSummary.addEventListener('click', handleFilterClick);
    tableBody.addEventListener('click', (event) => {
        const target = event.target;
        const cell = target.closest('.item-name-clickable');
        if (cell && cell.dataset.itemName && cell.dataset.isinCd) {
            openModal(cell.dataset.itemName, cell.dataset.isinCd);
        }
    });
    // Add listener for the new ETF table as well
    newEtfsTableBody.addEventListener('click', (event) => {
        const target = event.target;
        const cell = target.closest('.item-name-clickable');
        if (cell && cell.dataset.itemName && cell.dataset.isinCd) {
            openModal(cell.dataset.itemName, cell.dataset.isinCd);
        }
    });
    tableBody.addEventListener('keydown', (event) => {
        const target = event.target;
        if ((event.key === 'Enter' || event.key === ' ') && target.matches('.item-name-clickable')) {
            event.preventDefault();
            if (target.dataset.itemName && target.dataset.isinCd) {
                openModal(target.dataset.itemName, target.dataset.isinCd);
            }
        }
    });
    newEtfsTableBody.addEventListener('keydown', (event) => {
        const target = event.target;
        if ((event.key === 'Enter' || event.key === ' ') && target.matches('.item-name-clickable')) {
            event.preventDefault();
            if (target.dataset.itemName && target.dataset.isinCd) {
                openModal(target.dataset.itemName, target.dataset.isinCd);
            }
        }
    });
    const handleResultTableClick = (event) => {
        const target = event.target;
        const nameCell = target.closest('.item-name-clickable');
        if (nameCell && nameCell.dataset.itemName && nameCell.dataset.isinCd) {
            openModal(nameCell.dataset.itemName, nameCell.dataset.isinCd);
            return;
        }
        const moveButton = target.closest('.watchlist-move-button');
        if (moveButton && moveButton.dataset.isinCd && !moveButton.disabled) {
            moveWatchlistItem(moveButton.dataset.isinCd, moveButton.dataset.move);
            return;
        }
        const toggleButton = target.closest('.watchlist-toggle-button');
        if (toggleButton && toggleButton.dataset.isinCd) {
            if (toggleButton.dataset.action === 'remove') {
                removeFromWatchlist(toggleButton.dataset.isinCd);
            }
            else {
                const item = [...allRankedEtfs, ...newlyListedEtfs].find(i => i.isinCd === toggleButton.dataset.isinCd);
                if (item) {
                    addToWatchlist(item);
                }
            }
        }
    };
    stockSearchTableBody.addEventListener('click', handleResultTableClick);
    watchlistTableBody.addEventListener('click', handleResultTableClick);
    const handleResultTableKeydown = (event) => {
        const target = event.target;
        if ((event.key === 'Enter' || event.key === ' ') && target.matches('.item-name-clickable')) {
            event.preventDefault();
            if (target.dataset.itemName && target.dataset.isinCd) {
                openModal(target.dataset.itemName, target.dataset.isinCd);
            }
        }
    };
    stockSearchTableBody.addEventListener('keydown', handleResultTableKeydown);
    watchlistTableBody.addEventListener('keydown', handleResultTableKeydown);
    stockSearchInput.addEventListener('input', renderStockSearchResults);
    watchlistExportButton.addEventListener('click', exportWatchlist);
    watchlistImportInput.addEventListener('change', async (event) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            await importWatchlistFromFile(file);
        }
        event.target.value = '';
    });
    loadWatchlist();
    renderWatchlist();
    modalCloseButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    const chartPeriodSelector = document.getElementById('chart-period-selector');
    if (chartPeriodSelector) {
        chartPeriodSelector.addEventListener('click', (event) => {
            const button = event.target.closest('.chart-period-button');
            if (button && button.dataset.periodDays) {
                redrawChartsForPeriod(parseInt(button.dataset.periodDays, 10));
            }
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
    downloadCsvButton.addEventListener('click', async () => {
        const isinCd = modal.dataset.isinCd;
        const itemName = modal.dataset.itemName;
        const apiKey = apiKeyInput.value.trim();
        const baseDateStr = baseDateInput.value;
        if (!isinCd || !itemName || !apiKey || !baseDateStr) {
            downloadStatus.textContent = '오류: 필수 정보가 없습니다.';
            return;
        }
        downloadCsvButton.disabled = true;
        downloadStatus.textContent = '데이터 조회 중... (최대 1분 소요)';
        try {
            const endDate = new Date(baseDateStr);
            const beginDate = new Date(endDate);
            beginDate.setFullYear(beginDate.getFullYear() - 1);
            const history = await fetchHistoryWithChunking(apiKey, isinCd, beginDate, endDate);
            if (!history || history.length === 0) {
                throw new Error('지난 1년간의 데이터를 찾을 수 없습니다.');
            }
            downloadStatus.textContent = '보조 지표 계산 중...';
            const priceHistory = history
                .map(item => ({
                ...item,
                date: item.basDt,
                high: parseFloat(item.hipr),
                low: parseFloat(item.lopr),
                close: parseFloat(item.clpr),
            }))
                .filter(item => item.date && isFinite(item.high) && isFinite(item.low) && isFinite(item.close))
                .sort((a, b) => a.date.localeCompare(b.date));
            const STOCHASTIC_PERIOD = 14;
            const RSI_PERIOD = 14;
            const stochasticData = calculateStochastic(priceHistory, STOCHASTIC_PERIOD);
            const rsiData = calculateRSI(priceHistory, RSI_PERIOD);
            const closePrices = priceHistory.map((d) => d.close);
            const macdData = calculateMACD(closePrices);
            const stochasticMap = new Map(stochasticData.map(d => [d.date, d.value]));
            const rsiMap = new Map(rsiData.map(d => [d.date, d.value]));
            const macdMap = new Map(priceHistory.map((d, i) => [d.date, {
                    macd: macdData.macdLine[i],
                    signal: macdData.signalLine[i],
                    hist: macdData.histogram[i]
                }]));
            const dataWithIndicators = history.map(item => {
                const stoch = stochasticMap.get(item.basDt);
                const rsi = rsiMap.get(item.basDt);
                const macd = macdMap.get(item.basDt);
                return {
                    ...item,
                    stochastic_k: stoch !== null && stoch !== undefined ? stoch.toFixed(2) : '',
                    rsi: rsi !== null && rsi !== undefined ? rsi.toFixed(2) : '',
                    macd: macd?.macd !== null && macd?.macd !== undefined ? macd.macd.toFixed(2) : '',
                    macd_signal: macd?.signal !== null && macd?.signal !== undefined ? macd.signal.toFixed(2) : '',
                    macd_hist: macd?.hist !== null && macd?.hist !== undefined ? macd.hist.toFixed(2) : '',
                };
            });
            downloadStatus.textContent = 'CSV 파일 생성 중...';
            const convertToCSV = (data) => {
                const headers = ['basDt', 'clpr', 'opnpr', 'hipr', 'lopr', 'trqu', 'trPrc', 'mrktTotAmt', 'nav', 'stochastic_k', 'rsi', 'macd', 'macd_signal', 'macd_hist'];
                const headerKorean = ['날짜', '종가', '시가', '고가', '저가', '거래량(주)', '거래대금(원)', '시가총액(원)', 'NAV', '스토캐스틱 %K (14)', 'RSI (14)', 'MACD (12,26)', 'MACD 시그널 (9)', 'MACD 히스토그램'];
                const csvRows = [headerKorean.join(',')];
                const sortedData = [...data].sort((a, b) => b.basDt.localeCompare(a.basDt));
                for (const item of sortedData) {
                    const values = headers.map(header => {
                        const val = item[header] ?? '';
                        return `"${String(val).replace(/"/g, '""')}"`;
                    });
                    csvRows.push(values.join(','));
                }
                return csvRows.join('\n');
            };
            const csvData = convertToCSV(dataWithIndicators);
            const downloadCSV = (csvContent, fileName) => {
                const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
                const link = document.createElement('a');
                const url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', fileName);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
            const safeItemName = itemName.replace(/[^a-z0-9_.-]/gi, '_');
            downloadCSV(csvData, `${safeItemName}_1yr_data_${formatDate(new Date())}.csv`);
            downloadStatus.textContent = '다운로드가 시작되었습니다.';
            setTimeout(() => { downloadStatus.textContent = ''; }, 3000);
        }
        catch (error) {
            console.error('Failed to download CSV:', error);
            downloadStatus.textContent = `오류: ${error.message}`;
        }
        finally {
            downloadCsvButton.disabled = false;
        }
    });
    // --- Centralized Indicator Calculation Logic ---
    const calculateAllIndicatorsForHistory = (history) => {
        if (!history || history.length < 14) {
            return history.map(item => ({ ...item, stochastic_k: null, rsi: null, macd: null, macd_signal: null, macd_hist: null, stochastic_k_weekly: null, rsi_weekly: null, macd_weekly: null, macd_hist_weekly: null, stochastic_diff: null, rsi_diff: null }));
        }
        const priceHistory = history
            .map(item => ({
            ...item, // Keep original data
            date: item.basDt,
            high: parseFloat(item.hipr),
            low: parseFloat(item.lopr),
            close: parseFloat(item.clpr),
        }))
            .filter(item => item.date && isFinite(item.high) && isFinite(item.low) && isFinite(item.close))
            .sort((a, b) => a.date.localeCompare(b.date));
        if (priceHistory.length < 14) {
            return history.map(item => ({ ...item, stochastic_k: null, rsi: null, macd: null, macd_signal: null, macd_hist: null, stochastic_k_weekly: null, rsi_weekly: null, macd_weekly: null, macd_hist_weekly: null, stochastic_diff: null, rsi_diff: null }));
        }
        // --- Daily Calculations ---
        const dailyStochastic = calculateStochastic(priceHistory, 14);
        const dailyRsi = calculateRSI(priceHistory, 14);
        const closePrices = priceHistory.map((d) => d.close);
        const dailyMacd = calculateMACD(closePrices);
        // --- Weekly Calculations ---
        const weeklyHistory = aggregateToWeekly(priceHistory);
        const weeklyStochastic = weeklyHistory.length >= 14 ? calculateStochastic(weeklyHistory, 14) : [];
        const weeklyRsi = weeklyHistory.length >= 14 ? calculateRSI(weeklyHistory, 14) : [];
        const weeklyClosePrices = weeklyHistory.map((d) => d.close);
        const weeklyMacd = weeklyHistory.length >= 14 ? calculateMACD(weeklyClosePrices) : { macdLine: [], signalLine: [], histogram: [] };
        const weeklyIndicatorMap = new Map();
        if (weeklyHistory.length > 0) {
            const weeklyStochasticMap = new Map(weeklyStochastic.map(d => [d.date, d.value]));
            const weeklyRsiMap = new Map(weeklyRsi.map(d => [d.date, d.value]));
            const weeklyMacdMap = new Map(weeklyHistory.map((d, i) => [d.date, {
                    macd: weeklyMacd.macdLine[i],
                    hist: weeklyMacd.histogram[i]
                }]));
            weeklyHistory.forEach(week => {
                const macdValues = weeklyMacdMap.get(week.date);
                weeklyIndicatorMap.set(week.date, {
                    stochastic_k_weekly: weeklyStochasticMap.get(week.date) ?? null,
                    rsi_weekly: weeklyRsiMap.get(week.date) ?? null,
                    macd_weekly: macdValues?.macd ?? null,
                    macd_hist_weekly: macdValues?.hist ?? null
                });
            });
        }
        let lastSeenWeeklyIndicators = {};
        const enrichedHistory = [];
        for (let i = 0; i < priceHistory.length; i++) {
            const day = priceHistory[i];
            const dateStr = day.date;
            if (weeklyIndicatorMap.has(dateStr)) {
                lastSeenWeeklyIndicators = weeklyIndicatorMap.get(dateStr);
            }
            const stoch_k = dailyStochastic[i]?.value ?? null;
            const rsi_val = dailyRsi[i]?.value ?? null;
            const { stochastic_k_weekly, rsi_weekly } = lastSeenWeeklyIndicators;
            const enrichedDay = {
                ...day,
                stochastic_k: stoch_k,
                rsi: rsi_val,
                macd: dailyMacd.macdLine[i] ?? null,
                macd_signal: dailyMacd.signalLine[i] ?? null,
                macd_hist: dailyMacd.histogram[i] ?? null,
                ...lastSeenWeeklyIndicators,
                stochastic_diff: (stoch_k != null && stochastic_k_weekly != null) ? stoch_k - stochastic_k_weekly : null,
                rsi_diff: (rsi_val != null && rsi_weekly != null) ? rsi_val - rsi_weekly : null,
            };
            enrichedHistory.push(enrichedDay);
        }
        return enrichedHistory;
    };
    // Handle responsive table column width on horizontal scroll for mobile
    if (tableContainer) {
        tableContainer.addEventListener('scroll', () => {
            const table = tableContainer.querySelector('table');
            if (table) {
                if (tableContainer.scrollLeft > 10) {
                    table.classList.add('scrolled-horizontally');
                }
                else {
                    table.classList.remove('scrolled-horizontally');
                }
            }
        }, { passive: true });
    }
    const rankHeader = document.getElementById('rank-header');
    if (rankHeader) {
        rankHeader.addEventListener('click', () => {
            if (allRankedEtfs.length > 0) {
                if (currentSortColumn === 'rank') {
                    currentSortOrder = currentSortOrder === 'desc' ? 'asc' : 'desc';
                }
                else {
                    currentSortColumn = 'rank';
                    currentSortOrder = 'desc';
                }
                renderResults();
            }
        });
    }
    const rankChangeHeader = document.getElementById('rank-change-header');
    if (rankChangeHeader) {
        rankChangeHeader.addEventListener('click', () => {
            if (allRankedEtfs.length > 0) {
                if (currentSortColumn === 'rankChange') {
                    currentSortOrder = currentSortOrder === 'desc' ? 'asc' : 'desc';
                }
                else {
                    currentSortColumn = 'rankChange';
                    currentSortOrder = 'desc';
                }
                renderResults();
            }
        });
    }
    fetchButton.addEventListener('click', calculateAndStoreResults);
    showNewEtfsButton.addEventListener('click', renderNewEtfs);
});
