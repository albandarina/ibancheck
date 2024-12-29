/*function message(){
  alert('welcome to function')
}


function add(x,y)
{
    return x+y;
}

var result= add(10,15);

console.log(result);

var sub=()=> //arwow
{
    alert('welcome');
}

function funname(){

}




var chstate=()=>
{
    let ch=document.getElementById("t1").value; // get 
    let ch1=document.getElementById("p2") // assign to t2
    ch1.innerHTML=ch; // show value from
}


var read=()=>
    {
        let ch=document.getElementById("t1");
        ch.innerHTML="hellow";
    }
*/
/*
const banks = [
    {
        'samaCode': '55',
        'bankName': 'Banque Saudi Fransi',
        'nameEn': 'Banque Saudi Fransi',
        'nameAr': 'البنك السعودي الفرنسي',
    },
    {
        'name': 'Alrajhi Bank',
        'samaCode': '80',
        'nameEn': 'Alrajhi Bank',
        'nameAr': 'بنك الراجحي',
    },
    {
        'samaCode': '10',
        'bankName': 'National Commercial Bank',
        'nameEn': 'National Commertial Bank',
        'nameAr': 'البنك الأهلي التجاري',
    },
    {
        'samaCode': '45',
        'bankName': 'Saudi British Bank',
        'nameEn': 'SABB',
        'nameAr': 'ساب',
    },
    {

        'samaCode': '20',
        'bankName': 'Riyadh Bank',
        'nameEn': 'Riyad Bank',
        'nameAr': 'بنك الرياض',
    },
    {

        'samaCode': '40',
        'bankName': 'Saudi American Bank',
        'nameEn': 'SAMBA',
        'nameAr': 'سامبا',
    },
    {
        'samaCode': '05',
        'bankName': 'Alinma Bank',
        'nameEn': 'AL Inma Bank',
        'nameAr': 'بنك الانماء',
    },
    {
        'samaCode': '50',
        'bankName': 'Alawwal bank',
        'nameEn': 'AlAwwal Bank',
        'nameAr': 'البنك الأول',
    },
    {
        'samaCode': '60',
        'bankName': 'Bank AlJazira',
        'nameEn': 'Bank Aljazerah',
        'nameAr': 'بنك الجزيرة',
    },
    {
        'samaCode': '65',
        'bankName': 'Saudi Investment Bank',
        'nameEn': 'Saudi Investment Bank',
        'nameAr': 'البنك السعودي للأستثمار',
    },
    {
        'samaCode': '15',
        'bankName': 'Bank AlBilad ',
        'nameEn': 'BANK ALBELAD',
        'nameAr': 'بنك البلاد',
    },
    {
        'samaCode': '30',
        'bankName': 'Arab National Bank',
        'nameEn': 'Arab National Bank',
        'nameAr': 'البنك العربي الوطني',
    },
    {
        'samaCode': '90',
        'bankName': 'GULF Bank',
        'sarieCode': 'GULFSARI',
        'nameEn': 'Gulf International Bank',
        'nameAr': 'بنك الخليج',
    },
    {
        'samaCode': '95',
        'bankName': 'Emirates Bank',
        'nameEn': 'EMARITE BANK',
        'nameAr': 'بنك الامارات',
    },
    {
        'samaCode': '76',
        'bankName': 'Bank Muscat',
        'nameEn': 'Bank Muscat',
        'nameAr': 'بنك مسقط',
    },
    {
        'samaCode': '71',
        'bankName': 'National Bank of Bahrain',
        'nameEn': 'National Bank Of Bahrain',
        'nameAr': 'بنك البحرين الوطني',
    },
    {
        'samaCode': '75',
        'bankName': 'National Bank of Kuwait',
        'nameEn': 'National Bank of Kuwait',
        'nameAr': 'بنك الكويت الوطني',
    },
    {
        'samaCode': '85',
        'bankName': 'BNP Paribas Bank',
        'nameEn': 'BNP PARIBAS SAUDI ARABIA',
        'nameAr': 'بي ان بي باريبوس',
    },
];


function checkiban(iban)
{
  if(!iban)
  {
     return false;
  }
  
   iban=iban.replaceAll(' ','');
   
   if(iban.length!==24)
   {
    return false;
   }
   
   if(!iban.startsWith("SA"))
   {
    return false;
   }

  return true;
}


function GetIban()
{
   var iban=document.getElementById("iban").value;
   var result=document.getElementById("result");
   if(!checkiban())
   {
     result.innerHTML="الايبان غير صحيح";
   }
   else
   {
    result.innerHTML="الايبان صحيح";
     iban=iban.replaceAll(' ','');
    const samacode=iban.substring(4.6);
    const banckname=banks.find(e=>e.samacode==samacode);
    const bn=document.getElementById("banck").value;
    const banckresult=document.getElementById("banck1").value;
    bn.innerHTML="اسم البنك";
    banckresult.innerHTML=banckname.name;
    console.log(banckname);


    
   }
}
*/

const banks = [
    { 'samaCode': '55', 'nameEn': 'Banque Saudi Fransi', 'nameAr': 'البنك السعودي الفرنسي' },
    { 'samaCode': '80', 'nameEn': 'Alrajhi Bank', 'nameAr': 'بنك الراجحي' },
    { 'samaCode': '10', 'nameEn': 'National Commercial Bank', 'nameAr': 'البنك الأهلي التجاري' },
    { 'samaCode': '45', 'nameEn': 'SABB', 'nameAr': 'ساب' },
    { 'samaCode': '20', 'nameEn': 'Riyad Bank', 'nameAr': 'بنك الرياض' },
    { 'samaCode': '40', 'nameEn': 'SAMBA', 'nameAr': 'سامبا' },
    { 'samaCode': '05', 'nameEn': 'AL Inma Bank', 'nameAr': 'بنك الانماء' },
    { 'samaCode': '50', 'nameEn': 'AlAwwal Bank', 'nameAr': 'البنك الأول' },
    { 'samaCode': '60', 'nameEn': 'Bank Aljazerah', 'nameAr': 'بنك الجزيرة' },
];

function checkiban(iban) {
    if (!iban) return false;
    iban = iban.replaceAll(' ', '');
    if (iban.length !== 24) return false;
    if (!iban.startsWith("SA")) return false;
    return true;
}

function GetIban() {
    const ibanInput = document.getElementById("iban").value;
    const result = document.getElementById("result");
    const samaCodeElement = document.getElementById("samaCode");
    const bankNameElement = document.getElementById("bankName");

    if (!checkiban(ibanInput)) {
        result.innerHTML = "الايبان غير صحيح";
        samaCodeElement.innerHTML = "-";
        bankNameElement.innerHTML = "-";
        return;
    }

    const iban = ibanInput.replaceAll(' ', '');
    const samaCode = iban.substring(4, 6); // استخراج SAMA Code
    const bank = banks.find(b => b.samaCode === samaCode);

    if (bank) {
        result.innerHTML = "الايبان صحيح";
        samaCodeElement.innerHTML = samaCode;
        bankNameElement.innerHTML = bank.nameAr;
    } else {
        result.innerHTML = "الايبان صحيح لكن البنك غير معروف";
        samaCodeElement.innerHTML = samaCode;
        bankNameElement.innerHTML = "غير معروف";
    }
}