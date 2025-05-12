
export interface Video {
  id: number;
  title: string;
  description: string;
  views: string;
  url: string;
  thumbnail?: string;
}

export interface BiographyData {
  fullName: string;
  knownAs: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  currentResidence: string;
  religion: string;
  bio: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
}

export interface CharityWork {
  id: number;
  title: string;  // Added this property to fix the type error
  name: string;
  description: string;
  impact: string;
  year: string;
}

export const biography: BiographyData = {
  fullName: "حسن سليمان أحمد",
  knownAs: "أبو فَلَّة",
  birthDate: "18 ديسمبر 1998",
  birthPlace: "مدينة الكويت، دولة الكويت",
  nationality: "صومالي",
  currentResidence: "دبي، الإمارات العربية المتحدة",
  religion: "الإسلام",
  bio: "وُلد حسن سليمان في الكويت عام 1998. أكمل دراسته الثانوية العامة في المدارس الحكومية الكويتية، والتي تسمح للمقيمين من الجنسية الصومالية بالدراسة بها. لم يكمل دراسته الجامعية لأسباب مالية، على الرغم من اجتيازه للمرحلة الثانوية بنجاح. أنشأ أبو فله قناته على اليوتيوب في عام 2016، وكان اسمها في البداية \"قيمز فلة\". لاحقًا، قام بتغيير اسم القناة إلى اسمها الحالي \"أبو فلة\". ذكر حسن سليمان أن اختياره لكلمة \"فلة\" كان بسبب أنها كلمة خليجية دارجة تعني \"المرح\" و\"الانبساط\". في بداية مسيرته، واجه أبو فله معارضة من والده الذي كان يرى أن اليوتيوب \"فضاء للشياطين\" وهدده بالمقاطعة بعد وصول عدد المشتركين إلى نصف مليون. إلا أن والدته تدخلت وأقنعت والده بدعم ابنه في عمله كصانع محتوى."
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "تجاوز عدد المشتركين 47 مليون",
    description: "وصل عدد مشتركي قناة أبو فله على يوتيوب إلى أكثر من 47 مليون مشترك، مما يجعله من أكبر صناع المحتوى العرب على المنصة.",
    year: "2025"
  },
  {
    id: 2,
    title: "أكثر من 3.6 مليار مشاهدة",
    description: "تجاوز إجمالي عدد المشاهدات على القناة 3.6 مليار مشاهدة، وهو رقم قياسي للمحتوى العربي.",
    year: "2022"
  },
  {
    id: 3,
    title: "درع اليوتيوب الماسي",
    description: "حصل على درع اليوتيوب الماسي بعد وصول عدد المشتركين إلى 10 ملايين مشترك.",
    year: "2021"
  },
  {
    id: 4,
    title: "درع الـ 50 مليون مشترك",
    description: "تم تكريمه بدرع الـ 50 مليون مشترك من يوتيوب، وهو إنجاز نادر على مستوى العالم.",
    year: "2025"
  },
  {
    id: 5,
    title: "قائمة فوربس 30 تحت 30",
    description: "تم إدراجه في قائمة فوربس الشرق الأوسط \"30 Under 30\" لعام 2022، التي تضم أبرز الشباب المؤثرين تحت سن الثلاثين في المنطقة.",
    year: "2022"
  }
];

export const charityWorks: CharityWork[] = [
  {
    id: 1,
    title: "حملة لنجعل شتاءهم أدفأ",
    name: "حملة لنجعل شتاءهم أدفأ",
    description: "قاد حملة تبرعات ضخمة لمساعدة اللاجئين على مواجهة برد الشتاء القارس. نجح في جمع أكثر من 11 مليون دولار أمريكي خلال هذه الحملة.",
    impact: "تمت الحملة بالتعاون مع مؤسسة مبادرات محمد بن راشد آل مكتوم العالمية، والمفوضية السامية للأمم المتحدة لشؤون اللاجئين، وشبكة بنوك الطعام الإقليمية. خلال الحملة، قام أبو فله بحبس نفسه في غرفة زجاجية لمدة 12 يومًا في بث مباشر متواصل، محطمًا بذلك رقمين قياسيين في موسوعة غينيس للأرقام القياسية: أطول بث مباشر متواصل في التاريخ، وأكثر عدد مشاهدات مباشرة في لحظة واحدة لحملة إنسانية عبر يوتيوب.",
    year: "2022"
  },
  {
    id: 2,
    title: "تمويل عمليات إعتام عدسة العين",
    name: "تمويل عمليات إعتام عدسة العين",
    description: "جمع تبرعات لتمويل أكثر من 1500 عملية جراحية لمعالجة إعتام عدسة العين (جراحة الساد) في أفريقيا، مما ساهم في استعادة البصر للكثيرين.",
    impact: "ساعد أكثر من 1500 شخص على استعادة نعمة البصر من خلال هذه المبادرة الإنسانية.",
    year: "2023"
  },
  {
    id: 3,
    title: "دعم مرضى السرطان",
    name: "دعم مرضى السرطان",
    description: "مبادرات لدعم مرضى السرطان معنوياً ومادياً، بما في ذلك زيارات شخصية للمرضى لرفع روحهم المعنوية.",
    impact: "فاجأ أحد متابعيه الذي يحارب مرض السرطان بزيارة ودعم معنوي، وقدم المساعدة لعائلات عديدة تواجه هذا المرض.",
    year: "2024"
  },
  {
    id: 4,
    title: "تقديم هدايا للمتابعين",
    name: "تقديم هدايا للمتابعين",
    description: "قدم أكثر من 30 سيارة كهدايا لمتابعيه ومعجبيه، بالإضافة إلى هدايا قيمة أخرى مثل أجهزة الكترونية وهواتف ذكية.",
    impact: "أدخل الفرحة على قلوب الكثير من المتابعين والمعجبين، وساعد العديد من الأسر المحتاجة.",
    year: "2020-2025"
  }
];

export const featuredVideos: Video[] = [
  {
    id: 1,
    title: "جاوب غلط تنجلد 👟 (انشقيينا 😭🏃🏾‍♂️)",
    description: "تحدي أسئلة وأجوبة بطابع فكاهي وعقوبات مضحكة للمخفقين.",
    views: "1.6 مليون مشاهدة",
    url: "https://www.youtube.com/embed/PLACEHOLDER_1",
    thumbnail: "https://img.youtube.com/vi/PLACEHOLDER_1/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "قصة الحادث والمشاكل قبله | رُبَّ ضارّة نافعة 🙏🏽",
    description: "أبو فله يشارك قصة شخصية عن حادث مر به والمشاكل التي سبقته، مع نظرة إيجابية للأحداث.",
    views: "2.5 مليون مشاهدة",
    url: "https://www.youtube.com/embed/PLACEHOLDER_2",
    thumbnail: "https://img.youtube.com/vi/PLACEHOLDER_2/maxresdefault.jpg"
  },
  {
    id: 3,
    title: "تاخذ الهدية = تخسر 10,000💵؟ 😳🎁",
    description: "تحدي يعتمد على الاختيارات، حيث قد تؤدي الهدية إلى خسارة مبلغ مالي كبير.",
    views: "4.2 مليون مشاهدة",
    url: "https://www.youtube.com/embed/PLACEHOLDER_3",
    thumbnail: "https://img.youtube.com/vi/PLACEHOLDER_3/maxresdefault.jpg"
  },
  {
    id: 4,
    title: "أتحداك ما تضحك بالمقطع هذا 🔥 | حلقة العييد 🤣🎉",
    description: "مقطع مخصص للعيد يتضمن محتوى كوميدي وتحدي عدم الضحك.",
    views: "4.9 مليون مشاهدة",
    url: "https://www.youtube.com/embed/PLACEHOLDER_4",
    thumbnail: "https://img.youtube.com/vi/PLACEHOLDER_4/maxresdefault.jpg"
  },
  {
    id: 5,
    title: "اذا خوفتني لك 70$ (جوائز لانهائية🔥)",
    description: "تحدي يعتمد على إخافة أبو فله مقابل جائزة مالية، مع وعود بجوائز مستمرة.",
    views: "4.9 مليون مشاهدة",
    url: "https://www.youtube.com/embed/PLACEHOLDER_5",
    thumbnail: "https://img.youtube.com/vi/PLACEHOLDER_5/maxresdefault.jpg"
  },
  {
    id: 6,
    title: "متابع سب أمي و سافرت له 🛑⚠",
    description: "أبو فله يشارك تجربة شخصية حول تعليق مسيء من متابع وكيف تعامل مع الموقف بالسفر لمواجهته.",
    views: "11 مليون مشاهدة",
    url: "https://www.youtube.com/embed/PLACEHOLDER_21",
    thumbnail: "https://img.youtube.com/vi/PLACEHOLDER_21/maxresdefault.jpg"
  },
  {
    id: 7,
    title: "إذا ضحكتني أعطيك ايفون 16📱🔥(مستحيل أضحك😡)",
    description: "تحدي موجه للمشاهدين لإضحاك أبو فله مقابل الفوز بهاتف آيفون 16.",
    views: "16 مليون مشاهدة",
    url: "https://www.youtube.com/embed/PLACEHOLDER_22",
    thumbnail: "https://img.youtube.com/vi/PLACEHOLDER_22/maxresdefault.jpg"
  },
  {
    id: 8,
    title: "فاجأت متابع يحارب السرطان ❤️",
    description: "لفتة إنسانية من أبو فله حيث يقوم بمفاجأة أحد متابعيه الذي يعاني من مرض السرطان.",
    views: "8.9 مليون مشاهدة",
    url: "https://www.youtube.com/embed/PLACEHOLDER_26",
    thumbnail: "https://img.youtube.com/vi/PLACEHOLDER_26/maxresdefault.jpg"
  }
];

export const allVideos: Video[] = [
  ...featuredVideos,
  {
    id: 9,
    title: "لما الفقراء يلعبون جولف 😂⛳ | تحدي على 15,000💵",
    description: "مقطع ترفيهي يتضمن لعب الجولف بطريقة فكاهية مع تحدي على جائزة مالية.",
    views: "1.3 مليون مشاهدة",
    url: "https://www.youtube.com/embed/PLACEHOLDER_6",
    thumbnail: "https://img.youtube.com/vi/PLACEHOLDER_6/maxresdefault.jpg"
  },
  {
    id: 10,
    title: "تحديات الصين 🇭🇰",
    description: "أبو فله يخوض تحديات متنوعة مستوحاة من الصين أو تجري في مكان له طابع صيني.",
    views: "3.5 مليون مشاهدة",
    url: "https://www.youtube.com/embed/PLACEHOLDER_7",
    thumbnail: "https://img.youtube.com/vi/PLACEHOLDER_7/maxresdefault.jpg"
  },
  // More videos included (truncated for brevity)
  {
    id: 11,
    title: "اول فوز لي بحياتي امام المتابعين⚽️🔥(سجلنا قول)",
    description: "أبو فله يشارك لحظة فوز في مباراة كرة قدم أمام متابعيه، مع التركيز على تسجيل هدف.",
    views: "2.2 مليون مشاهدة",
    url: "https://www.youtube.com/embed/PLACEHOLDER_8",
    thumbnail: "https://img.youtube.com/vi/PLACEHOLDER_8/maxresdefault.jpg"
  },
  {
    id: 12,
    title: "أكثر مقطع ضحكت عليه بحياتي🤣(#8)",
    description: "جزء آخر من سلسلة المقاطع التي يعرض فيها أبو فله أكثر الأشياء التي أضحكته.",
    views: "6.8 مليون مشاهدة",
    url: "https://www.youtube.com/embed/PLACEHOLDER_20",
    thumbnail: "https://img.youtube.com/vi/PLACEHOLDER_20/maxresdefault.jpg"
  }
];
