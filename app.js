/* =====================================================
   NAŠA TAJNA IGRA — app.js
   ===================================================== */

/* ── PITANJA ── */
const allQ = [

/* ── SOFT (💙 Nježno) ── */
{ cat: "soft", t: "Koji moj dodir te uvijek totalno opusti, baš tad kad ti treba?" },
{ cat: "soft", t: "Što ti prođe kroz glavu kad te neočekivano zagrlim s leđa?" },
{ cat: "soft", t: "Koji dio mog tijela te najprije pogleda kad uđem u sobu?" },
{ cat: "soft", t: "Da smo negdje nasamo na sat vremena bez mobitela — što bi prvije predložio/la?" },
{ cat: "soft", t: "Koji miris na meni te odmah odvede tamo?" },
{ cat: "soft", t: "Što ti prođe kroz glavu kada me vidiš u pidžami ujutro, s neočešljanom kosom?" },
{ cat: "soft", t: "Koji moj glas (normalan, ljut, umoran, nasmijan) te najviše privlači?" },
{ cat: "soft", t: "Sjećaš li se trenutka kad si osjetio/la prvu pravu fizičku privlačnost prema meni?" },
{ cat: "soft", t: "Koja stvar na meni te nasmijava čak i kad je ne bi htio/la priznat?" },
{ cat: "soft", t: "Kad bi me mogao/la cjelovat samo jedno mjesto sad, koje bi to bilo?" },
{ cat: "soft", t: "Što ti je drago a da nikad nisi rekao/la na glas?" },
{ cat: "soft", t: "Postoji li neka moja navika koja te tajno jako privlači?" },
{ cat: "soft", t: "Što god radim — koji moj pokret izgleda najseksi a da toga nisam svjestan/na?" },
{ cat: "soft", t: "U kojoj odjeći sam po tebi najatraktivniji/a — budi iskren/a?" },
{ cat: "soft", t: "Koji dio dana volite najviše provesti zajedno i zašto?" },
{ cat: "soft", t: "Što bi rekao/la kad bih te pitao/la da me iznenadi ovaj vikend?" },
{ cat: "soft", t: "Koji naš ritual (jutarnja kava, večernji zagrljaj, itd.) ti je najdraži?" },
{ cat: "soft", t: "Da me možeš opisati jednom riječju koja se tiče intimiteta, koja bi to bila?" },
{ cat: "soft", t: "Kad smo u javnosti, u kojim trenucima mi budeš posebno blizu bez razloga?" },
{ cat: "soft", t: "Što te nasmijava bez da znaš zašto kad smo sami zajedno?" },
{ cat: "soft", t: "Koji moj pogled (ljut, tužan, nasmijan, pospan) te najviše dira?" },
{ cat: "soft", t: "Postoji li nešto što vidiš kod mene a bojao/la si se da kažeš?" },
{ cat: "soft", t: "Koji smo moment imali gdje si pomislio/la 'ovo je moja osoba'?" },
{ cat: "soft", t: "Kad sam tužan/na — što ti instinktivno poželiš učiniti za mene?" },
{ cat: "soft", t: "Što bi mi šapnuo/la na uho da smo u sobi punoj ljudi?" },
{ cat: "soft", t: "Koja je naša stvar — nešto što postoji samo između nas dvoje?" },
{ cat: "soft", t: "Što ti znači kad me zagrlim ili pipnem s leđa dok nešto radiš?" },
{ cat: "soft", t: "Koji ti je naš zajednički uspomen najdraža i zašto?" },
{ cat: "soft", t: "Što bi napravio/la da me možeš iznenaditi bez budžeta?" },
{ cat: "soft", t: "Koji detalj mog izgleda uvijek primjetiš ali rijetko komentiraš?" },
{ cat: "soft", t: "U kojim situacijama se osjećaš najsigurnije uz mene?" },
{ cat: "soft", t: "Što bi mi rekao/la kad bi mogao/la bez da ikad posalujem?" },
{ cat: "soft", t: "Koji moj ton glasa te najviše smiruje kad si pod stresom?" },
{ cat: "soft", t: "Postoji li nešto što radim a što misliš da ne znam da radiš sam/a?" },
{ cat: "soft", t: "Što bi si volio/la da radimo više zajedno?" },
{ cat: "soft", t: "Koji bi nam bio savršen dan — od jutra do večeri?" },
{ cat: "soft", t: "Što ti znači kad ti rečem 'volim te' u rano jutro?" },
{ cat: "soft", t: "Da možeš promijeniti jedan naš ritual, koji bi bio i kako bi ga promijenio/la?" },
{ cat: "soft", t: "Što ti prođe kroz glavu kad ti netko komplimenira mene pred tobom?" },
{ cat: "soft", t: "Koji naš razgovor pamtiš kao najintimniji — ne seksualni, nego pravi razgovor?" },
{ cat: "soft", t: "Što bi mi poklonio/la da možeš, bez ograničenja i cijene?" },
{ cat: "soft", t: "Koji zvuk mog smijeha ti je najdraži?" },
{ cat: "soft", t: "Koji ti je moj manir koji bi mi uvijek oprostio/la?" },
{ cat: "soft", t: "Što bi mi rekao/la pred spavanje kad nema pritiska?" },
{ cat: "soft", t: "Da možeš zamrznuti jedan naš moment, koji bi izabrao/la?" },
{ cat: "soft", t: "Koji je naš unutarnji štos koji nitko drugi ne bi skužio?" },
{ cat: "soft", t: "U kojim trenutcima zaboraviš na sve i budeš samo ovdje sa mnom?" },
{ cat: "soft", t: "Koji osjećaj imaš kad te netko pita kako je u vezi — što je prvo što pomisliš?" },
{ cat: "soft", t: "Što misliš — koji je moj greatest hit u partnerstvu s tobom?" },
{ cat: "soft", t: "Kad si najponosniji/a što sam tvoj/a partner/ica?" },

/* ── SREDNJE (🔶 Zagrijavanje) ── */
{ cat: "srednje", t: "Koji potez s moje strane te odmah 'upali' čak i kad nisi planirao/la?" },
{ cat: "srednje", t: "Postoji li neka fantazija koju nikad nisi ispričao/la a sad možeš?" },
{ cat: "srednje", t: "Što bi me zamolio/la da ti kažem ili napišem a da te jako nabrija?" },
{ cat: "srednje", t: "Koji je tvoj omiljeni dio mog tijela i zašto baš taj?" },
{ cat: "srednje", t: "Kad smo u javnosti — gdje bi me najradije pipnuo/la da ne možeš?" },
{ cat: "srednje", t: "Koji moj pogled (onaj kad hoću) ti je dovoljno da te pređe sve?" },
{ cat: "srednje", t: "Što bi volio/la da učinim a da te ne pitam, samo to napravim?" },
{ cat: "srednje", t: "U kojim okolnostima bi mi rekao/la 'stop, sad, ovdje' bez da misliš dvaput?" },
{ cat: "srednje", t: "Što bi mi šapnuo/la što bi me odmah uspjelo?" },
{ cat: "srednje", t: "Koji zvuk od mene te najviše uspijeva?" },
{ cat: "srednje", t: "Postoji li nešto što ti se sviđa u postelji a bojao/la si se tražit?" },
{ cat: "srednje", t: "Kad te dodirujem — koji je onaj dodir koji sve promijeni?" },
{ cat: "srednje", t: "Što bi volio/la da traje duže između nas?" },
{ cat: "srednje", t: "Na kojoj lokaciji bi najradije nešto 'zabranjeno' napravio/la sa mnom?" },
{ cat: "srednje", t: "Što misliš na u trenutku kada skinemo sve?" },
{ cat: "srednje", t: "Koji je tvoj top 3 mjesta na mome tijelu koje bi sad htio/la zagrliti?" },
{ cat: "srednje", t: "Što bi mi rekao/la kroz poruku koja bi me odmah uzbudila?" },
{ cat: "srednje", t: "Koji je tvoj ritual kad znaš što se događa večeras?" },
{ cat: "srednje", t: "Što ti znači kad vidim da si uzbuđen/a — što me tjera da nastavim?" },
{ cat: "srednje", t: "Koji je moment između nas koji te uvijek rasplamsava kad ga se sjetiš?" },
{ cat: "srednje", t: "Što bi mi rekao/la na uho za stolom u restoranu da ne mogu ustati?" },
{ cat: "srednje", t: "Koji trik znam koji uvijek upali na tebi?" },
{ cat: "srednje", t: "Što bi najradije da nosim (ili ne nosim) kad smo doma sami?" },
{ cat: "srednje", t: "Koji si taj moment kad smo bili napolju a ti si mislio/la samo na to?" },
{ cat: "srednje", t: "Da možeš opisati savršeni večernji ritual, kako bi izgledao?" },
{ cat: "srednje", t: "Koji temperatura/ambiente ti je idealna za intimnost?" },
{ cat: "srednje", t: "Što bi mi rekao/la da me pohvališ u postelji?" },
{ cat: "srednje", t: "Što bi volio/la jednom probati ali nikad nisi pitao/la?" },
{ cat: "srednje", t: "Koji je onaj mali detalj koji čini veliku razliku u našoj intimnosti?" },
{ cat: "srednje", t: "Koji tip poruka od mene te najbrže rasplamsaju?" },
{ cat: "srednje", t: "Da smo na odmoru sami — što bi predložio/la za prvu noć?" },
{ cat: "srednje", t: "Koji je naš spot doma gdje ti je najdraže biti s tobom?" },
{ cat: "srednje", t: "Što radi moje tijelo za što ne mogu reći nahvale?" },
{ cat: "srednje", t: "Koji miris, glazba ili tekstura te odmah vrati na naš zajednički moment?" },
{ cat: "srednje", t: "Što bi volio/la da trajalo 3x duže nego što obično traje?" },
{ cat: "srednje", t: "Koja nespojiva stvar me čini privlačnijim/om u tvojim očima?" },
{ cat: "srednje", t: "Što bi mi rekao/la na samom početku intimne večeri da smo na istoj valnoj duljini?" },
{ cat: "srednje", t: "Koji pokret od mene te uvijek iznenadi na dobar način?" },
{ cat: "srednje", t: "Što misliš o ideji da jednom probamo nešto u prirodi, nasamo?" },
{ cat: "srednje", t: "Što ti je važno da se dogodi prije nego što dođemo do kreveta?" },
{ cat: "srednje", t: "Koji je najveći komplement koji mi možeš dati vezano za naš intimni život?" },
{ cat: "srednje", t: "U kojim trenucima zaboraviš brinuti o svemu i budeš samo prisutan/na?" },
{ cat: "srednje", t: "Što ti nedostaje u intimnosti od mene i uvijek si prešutio/la?" },
{ cat: "srednje", t: "Koji bi bio naš savršeni 'ne smijemo ali hoćemo' scenarij?" },
{ cat: "srednje", t: "Koji zvuk, slika ili osjećaj te odmah vrati na naš najvruć moment?" },
{ cat: "srednje", t: "Što bi napravio/la da imam potpuno slobodnu večer i samo tražim što hoćeš?" },
{ cat: "srednje", t: "Koji dio sebe najradije pokazuješ samo meni?" },
{ cat: "srednje", t: "Što ti prolazi kroz glavu kad me vidiš nakon duljeg razdvajanja?" },
{ cat: "srednje", t: "Koji posjed ili stvar u stanu asociraš s dobrim trenucima između nas?" },
{ cat: "srednje", t: "Što bi mi rekao/la poslje — ono što obično samo pomisliš?" },
{ cat: "srednje", t: "Koji te moj izraz lica odmah 'zna' bez da kažem ništa?" },

/* ── VRUĆE (🔥 Vruće) ── */
{ cat: "vruće", t: "Koji je tvoj tajni scenarij koji si zamišljao/la a nikad nisi rekao/la?" },
{ cat: "vruće", t: "Što bi uradio/la da te potpuno iznenadim u sobi sa svime postavljenim?" },
{ cat: "vruće", t: "Koji je onaj pokret od mene za koji uvijek poludiš — recite naglas?" },
{ cat: "vruće", t: "Da mi možeš reći samo jednu stvar što hoćeš da uradim — što bi to bilo?" },
{ cat: "vruće", t: "Koji je tvoj 'zabranjeni' tip fantazije koji se tiče nas dvoje?" },
{ cat: "vruće", t: "Što te uspije brže — što kažem ili što napravim?" },
{ cat: "vruće", t: "Koji dio mog tijela bi htio/la da provedemo cijelu večer otkrivajući?" },
{ cat: "vruće", t: "Što bi me zamolio/la da ne prestajem raditi u ključnom trenutku?" },
{ cat: "vruće", t: "Koji te je naš moment ostavio bez daha bukvalno?" },
{ cat: "vruće", t: "Što bi volio/la probati jednom a pitanje nisi isporučio/la?" },
{ cat: "vruće", t: "Da smo se upoznali slučajno negdje i ne znamo jedno za drugo — bi li me prišao/la?" },
{ cat: "vruće", t: "Što bi bilo tvoje 'safe word' u nekoj vrućoj igrici između nas?" },
{ cat: "vruće", t: "Koji tvoj pokret za koji znaš da me uvijek rasplamsava?" },
{ cat: "vruće", t: "Da mi možeš postaviti jedno pitanje koje nikad nisi smio/la — što bi pitao/la?" },
{ cat: "vruće", t: "Koji tip poruke ili slike od mene bi te uspio kroz radni dan?" },
{ cat: "vruće", t: "Što bi volio/la da jednom 'pokvarimo' pravila i radimo po svom?" },
{ cat: "vruće", t: "Koji je scenarij koji uključuje nas dvoje negdje napolju gdje ne bismo smjeli?" },
{ cat: "vruće", t: "Što bi rekao/la da te pitam samo jednu stvar u 2 ujutro?" },
{ cat: "vruće", t: "Koji te osjet (dodir, miris, zvuk, pogled) odmah baca u taj mod?" },
{ cat: "vruće", t: "Što bi napravio/la kad bih te vezao/la oči i prepustio/la samo osjetima?" },
{ cat: "vruće", t: "Koji je naš 'samo mi znamo' kod koji znači nešto konkretno i tajno?" },
{ cat: "vruće", t: "Da netko ne zna ništa o nama i gleda nas 5 min — što bi vidio/la?" },
{ cat: "vruće", t: "Što bi htio/la da jednom probamo sporije, puno sporije od normalnog?" },
{ cat: "vruće", t: "Koji je tvoj top 1 moment između nas koji ćeš pamtiti 20 god?" },
{ cat: "vruće", t: "Što misliš da o tebi ne znam, a baš se tiče ove teme?" },
{ cat: "vruće", t: "Koji bi bio scenarij koji ti je previše mamljiv da ga odbiješ?" },
{ cat: "vruće", t: "Koji zvuk ili rečenica od mene te uspije najbrže?" },
{ cat: "vruće", t: "Što bi rekao/la da ti dam upravljačku palicu ove večeri?" },
{ cat: "vruće", t: "Koji je dodir koji nikad ne propusti — svaki put?" },
{ cat: "vruće", t: "Što bi mi napravio/la kad bi imao/la potpuno slobodne ruke i sat vremena?" },
{ cat: "vruće", t: "Koji je tvoj pravi top 3 žudnji u intimnosti koje su tvoje i samo tvoje?" },
{ cat: "vruće", t: "Koji je fantazijski scenarij koji te nabrija samo kad ga zamišljaš, bez da ga živiš?" },
{ cat: "vruće", t: "Da možeš opisati savršen intimni vikend za nas dvoje — što bi uključivalo?" },
{ cat: "vruće", t: "Što bi me natjeralo da zaista izgubim kontrolu — u dobrom smislu?" },
{ cat: "vruće", t: "Koji je moj 'grijeh' za koji mi uvijek oprostiš i čak te veseli?" },
{ cat: "vruće", t: "Da bih te iznenadio/la na putovanju u hotelu — što bih trebao/la pripremiti?" },
{ cat: "vruće", t: "Koji je tvoj najveći 'turn on' koji nikad nisi ispričao/la prijateljima?" },
{ cat: "vruće", t: "Što radiš s rukama kad si jako uzbuđen/a i misliš da ne primjećujem?" },
{ cat: "vruće", t: "Koji je naš najdulji preduvodni ritual koji ti je bio savršen?" },
{ cat: "vruće", t: "Da možeš ponoviti jedan naš intiman moment — koji bi to bio?" },
{ cat: "vruće", t: "Što ti prolazi kroz glavu za vruće noći kada nisi sa mnom?" },
{ cat: "vruće", t: "Koji si moj dio tijela 'proučio/la' najiše a da to nisam skužio/la?" },
{ cat: "vruće", t: "Što bi rekao/la kad bi te pitao/la što hoćeš večeras bez cenzure?" },
{ cat: "vruće", t: "Koji je onaj moj pokret koji nikad ne bih smio/la prestat raditi?" },
{ cat: "vruće", t: "Da smo imali neograničeno vremena — što bi probali što nismo dosad?" },
{ cat: "vruće", t: "Koji te moj izraz — nasmiješen, ozbiljan ili onaj 'znam što hoću' — najviše uzbuđuje?" },
{ cat: "vruće", t: "Što bi rekao/la kad bi me mogao/la voditi doslovno gdje god hoćeš večeras?" },
{ cat: "vruće", t: "Koji je onaj moment kad si pomislio/la 'ovo je bolje nego što sam zamišljao/la'?" },
{ cat: "vruće", t: "Što bi htio/la da jednom budem u ulozi koja nije moja uobičajena?" },
{ cat: "vruće", t: "Koji te osjećaj iz naše intimnosti tijelom promijeni čak i dan poslje?" },
{ cat: "vruće", t: "Koji je tvoj taj scenarij koji bi jednom htio/la živjeti a znaš da ga nikad nismo probali?" },

/* ── TANTRIC (🌀 Tantrik) ── */
{ cat: "tantric", t: "Možeš li mi reći gdje na svom tijelu najjače osjećaš moju energiju kad smo blizu?" },
{ cat: "tantric", t: "Što osjećaš kad gledamo se u oči bez da kažemo ništa — dugo?" },
{ cat: "tantric", t: "Koji dio mog tijela bi volio/la da mazim minutu, samo dišemo zajedno?" },
{ cat: "tantric", t: "Što osjećaš kad disemo sinkronizirano — glupo ili moćno?" },
{ cat: "tantric", t: "Koji je onaj moj dodir koji ne izgleda seksualno ali te prebaci u drugi modus?" },
{ cat: "tantric", t: "Što se promijeni unutar tebe kad me zagrliš sto sekundi bez pomicanja?" },
{ cat: "tantric", t: "Koji je tvoj unutarnji osjećaj kad smo u apsolutnoj tišini a blizu smo?" },
{ cat: "tantric", t: "Što misliš — postoji li energetska veza između nas van tjelesnog kontakta?" },
{ cat: "tantric", t: "Koji dio tijela ti je najosjetljiviji a nije 'očigledno' erogen?" },
{ cat: "tantric", t: "Kad te dodirnem jako polako — gdje to najjače 'čuješ' u tijelu?" },
{ cat: "tantric", t: "Što doziviš kad ti cijela pažnja usmjerena na tebe minutama bez žurbe?" },
{ cat: "tantric", t: "Koji te dodir uspijeva ući u duboko relaksirano stanje?" },
{ cat: "tantric", t: "Što bi htio/la da istražujemo kroz dodir, bez cilja, samo prisutnost?" },
{ cat: "tantric", t: "Koji je tvoj osjećaj kad ti stisnem ruke i gledam te fiksirano?" },
{ cat: "tantric", t: "Što misliš da nam nedostaje u prisutnosti, a ne u tehnici?" },
{ cat: "tantric", t: "Koji te dio intimnosti najbrže odvodi u 'flow' stanje bez razmišljanja?" },
{ cat: "tantric", t: "Postoji li neko naše iskustvo gdje si osjećao/la spoj koji je bio nešto više od fizičkog?" },
{ cat: "tantric", t: "Što ti znači kad ti stavim ruku na srce i samo dišem s tobom?" },
{ cat: "tantric", t: "Koji bi ritual htio/la da kreiramo — nešto naše, sporo i namjerno?" },
{ cat: "tantric", t: "Koji je tvoj omiljeni položaj za meditativnu prisutnost s tobom?" },
{ cat: "tantric", t: "Što se dogodi s tvojim disanjem kad mi pređem dlan po leđima jako polako?" },
{ cat: "tantric", t: "Koji je osjećaj kad na kraju intimnog trenutka ostanemo u tišini i samo dišemo?" },
{ cat: "tantric", t: "Što bi htio/la probati od yoge za parove ili tantričnih tehnika?" },
{ cat: "tantric", t: "Koji zvuk iz prirode ili glazba te najbrže vodi u prisutno, otvoreno stanje?" },
{ cat: "tantric", t: "Što te sprečava da budeš potpuno prisutan/na u intimnim momentima?" },
{ cat: "tantric", t: "Koji dodir od mene ti otpusti napetost čak i kad si zatvoren/a?" },
{ cat: "tantric", t: "Što bi se promijenilo kad bismo imali sat vremena bez telefona, polako, bez cilja?" },
{ cat: "tantric", t: "Koji je tvoj energetski centar koji osjećaš da je najaktivniji kad smo bliski?" },
{ cat: "tantric", t: "Što bi volio/la da jednom istražimo kroz masažu koja ne ide nikamo — samo jest?" },
{ cat: "tantric", t: "Koji je tvoj osjećaj kad mi vjeruješ da te vodim potpuno, bez komentara?" },
{ cat: "tantric", t: "Što misliš da bi se promijenilo kad bismo uveli namjerni ritual svake tjedan?" },
{ cat: "tantric", t: "Koji te aspekt mog prisustva umiri kad si kaotičan/na iznutra?" },
{ cat: "tantric", t: "Što bi mi htio/la reći o svom tijelu što smatraš da ne znam?" },
{ cat: "tantric", t: "Koji tvoj unutarnji glas govori kad si u osjećaju pune sreće sa mnom?" },
{ cat: "tantric", t: "Koji je najduži period kad si bio/la potpuno u tijelu bez misli i što se radilo?" },
{ cat: "tantric", t: "Što bi ti željio/la istražiti u sebi kroz nas dvoje kao siguran prostor?" },
{ cat: "tantric", t: "Koji osjećaj imaš kad su oba tijela potpuno miran i nema žurbe ni cilja?" },
{ cat: "tantric", t: "Što ti donosi osjećaj potpune predaje — bez kontrole i bez straha?" },
{ cat: "tantric", t: "Koji je tvoj 'welcome home' osjećaj u tijelu kad si blizu mene?" },
{ cat: "tantric", t: "Što bi volio/la da jednom radimo u tišini, samo rukama i dahom?" },
{ cat: "tantric", t: "Koji je osjećaj koji ne možeš opisati riječima a doziviš samo uz mene?" },
{ cat: "tantric", t: "Što bi se promijenilo u naša tijela kad bismo ostali nepomično u zagrljaju 10 minuta?" },
{ cat: "tantric", t: "Koji tvoj tjelesni signal znam da znači da si potpuno ovdje i siguran/na?" },
{ cat: "tantric", t: "Što ti je u tijelu najlakše primiti od mene?" },
{ cat: "tantric", t: "Koji dodir mi treba da ti dam a da te ne pitam — samo to napravim?" },
{ cat: "tantric", t: "Što bi htio/la da jednom probamo uz sinkroniziran dah od početka do kraja?" },
{ cat: "tantric", t: "Koji je tvoj unutarnji glas koji te staje kad si blizu potpune predaje?" },
{ cat: "tantric", t: "Što ti donosi osjećaj potpune sigurnosti u meni — konkretno?" },
{ cat: "tantric", t: "Koji je dodir koji ne govorim ništa — ali ti znaš što mislim?" },
{ cat: "tantric", t: "Što bi htio/la da jednom osjećamo bez žurbe i bez cilja — samo zajedno?" },
{ cat: "tantric", t: "Koji aspekt intimnosti bi htio/la dublje istražiti kroz povjerenje?" },

/* ── SPICY (🌶️ Spicy) ── */
{ cat: "spicy", t: "Koji te moj scenarij koji nisi očekivao/la raspalio/la više nego išta?" },
{ cat: "spicy", t: "Što bi htio/la probati što te uvijek privlačilo ali nikad nisi rekao/la?" },
{ cat: "spicy", t: "Koji te tip igre uloga odvede na drugi nivo uzbuđenja?" },
{ cat: "spicy", t: "Što bi volio/la da jednom ima 'pravila' — ko god ih postavlja?" },
{ cat: "spicy", t: "Koji je tvoj 'nije moja stvar ALI' odgovor na ovo?" },
{ cat: "spicy", t: "Što misliš o ideji da jednom jedan od nas ima potpunu moć dok drugi sluša?" },
{ cat: "spicy", t: "Koji tekst od mene bi te nabrijo/la usred dana na poslu?" },
{ cat: "spicy", t: "Što bi htio/la da jednom isplaniramo sve unaprijed — scena, uloge, sve?" },
{ cat: "spicy", t: "Koji je tvoj 'ne mogu reći nikome ali tebi mogu' žudnji scenarij?" },
{ cat: "spicy", t: "Što bi volio/la da jednom jedan od nas iznenadi onog drugog potpuno neočekivano?" },
{ cat: "spicy", t: "Koji te moj odjevni predmet ili nedostatak istog odmah prebaci u drugačiji mod?" },
{ cat: "spicy", t: "Što bi htio/la da isprobamo s iglom i senom — povjerenje bez vidika?" },
{ cat: "spicy", t: "Koji je onaj 'malo previše' za tebe koji ni ne bi bio loš da probamo?" },
{ cat: "spicy", t: "Što bi htio/la da jednom budem beskompromisno direktivna/direktan?" },
{ cat: "spicy", t: "Koji je tvoj fantazijski zaplet koji bi uključivao stranca — ali da sam to ja?" },
{ cat: "spicy", t: "Što bi volio/la da jednom postavimo kao igru s jasnim pravilima i nagradama?" },
{ cat: "spicy", t: "Koji te je film, serija ili knjiga inspirirala na scenu koja te privlači?" },
{ cat: "spicy", t: "Što bi htio/la da jednom radimo bez govora — samo gestama i dodirom?" },
{ cat: "spicy", t: "Koji je scenarij koji te uzbuđuje i malo te je strah — ali uzbuđuje?" },
{ cat: "spicy", t: "Što misliš o igricama s ishodima — ko izgubi mora nešto napravit?" },
{ cat: "spicy", t: "Koji je tvoj top spicy scenarij koji bi jednom htio/la da orkestriram za tebe?" },
{ cat: "spicy", t: "Što bi napravio/la da sam ti ne rekao/la a ušao/la sam s planom?" },
{ cat: "spicy", t: "Koji je tvoj dirty little secret koji se tiče naše intimnosti?" },
{ cat: "spicy", t: "Što bi volio/la isprobati samo jednom, bez obaveze ponavljanja?" },
{ cat: "spicy", t: "Koji je tvoj 'nikad ne bih rekao/la u normalnom razgovoru' odgovor sad?" },
{ cat: "spicy", t: "Što bi htio/la da jednom budem ja taj koji postavljam sve bez pitanja?" },
{ cat: "spicy", t: "Koji je tvoj top 1 'zabranjeno' scenarij između nas dvoje?" },
{ cat: "spicy", t: "Što bi napravio/la da ti kažem: 'večeras radiš što ja kažem, bez pitanja'?" },
{ cat: "spicy", t: "Koji te je moment između nas bio toliko intenzivan da si htio/la da stane ali nisi?" },
{ cat: "spicy", t: "Što bi volio/la da jednom imamo verziju sebe koja je potpuno drugačija od uobičajene?" },
{ cat: "spicy", t: "Koji je moj glas ili rečenica koja mi ide pod kožu na dobar način?" },
{ cat: "spicy", t: "Što bi htio/la da se dogodi u hotelskoj sobi bez telefona i s puno vremena?" },
{ cat: "spicy", t: "Koji je onaj 'ne mogu vjerovati da ovo tražim' trenutak koji ipak tražiš?" },
{ cat: "spicy", t: "Što bi volio/la imati kao tajni kod za 'sad je taj moment' — nešto nenametljivo?" },
{ cat: "spicy", t: "Koji tip napetosti između nas te uzbuđuje čak i kad nije seksualna?" },
{ cat: "spicy", t: "Što misliš o verziji gdje jedan od nas čeka dok drugi se pripremi — koga bi volio/la biti?" },
{ cat: "spicy", t: "Koji scenarij koji uključuje improvizaciju bez plana te uzbuđuje?" },
{ cat: "spicy", t: "Što bi htio/la jednom probati vezano uz odjeću, kostim ili presvlačenje?" },
{ cat: "spicy", t: "Koji je tvoj onaj 'previše je dobro da tražim' scenarij koji sad tražiš?" },
{ cat: "spicy", t: "Što bi rekao/la da ti dam listu s tri opcije večeras i ti biraš?" },
{ cat: "spicy", t: "Koji je dodir u javnosti koji te nabrija bez da itko skuži?" },
{ cat: "spicy", t: "Što bi htio/la da jednom napišem ili kažem da dobiješ potpunu sliku moje žudnje?" },
{ cat: "spicy", t: "Koji je tvoj 'guilty pleasure' scenarij koji ti donosi uzbuđenje samo od zamišljanja?" },
{ cat: "spicy", t: "Što bi volio/la da jednom imamo jasne uloge — ko je dominantniji, ko se prepušta?" },
{ cat: "spicy", t: "Koji te zvuk od mene odmah baca u taj mod bez upozorenja?" },
{ cat: "spicy", t: "Što bi htio/la da jednom ciljano naučim samo za tebe — novi pokret, tehnika, ritual?" },
{ cat: "spicy", t: "Koji je tvoj 'vruća misao' u situacijama kad je ne bi trebao/la imati?" },
{ cat: "spicy", t: "Što bi volio/la da jednom budem kompletan/na novinar/ka tvoje žudnje — pitam sve?" },
{ cat: "spicy", t: "Koji je tvoj fantazijski 'mission impossible' scenarij s nama?" },
{ cat: "spicy", t: "Što bi mi rekao/la da mogu gledati tvoje misli jednu večer?" },
{ cat: "spicy", t: "Koji je naš ultimativni 'bucket list' intimni moment koji moramo ispuniti?" },

/* ── EKSTRA (⚡ Ekstra) ── */
{ cat: "ekstra", t: "Koji je taj tvoj najdublji 'nikad nikome nisam rekao/la' u intimnosti?" },
{ cat: "ekstra", t: "Da bi mi mogao/la postaviti jedan ultimatni zahtjev večeras — što bi to bilo?" },
{ cat: "ekstra", t: "Koji je scenarij koji misliš da je previše za tražiti, a meni možeš reći sad?" },
{ cat: "ekstra", t: "Što bi napravio/la da ti kažem da mogu biti što god hoćeš u tvojoj fantaziji?" },
{ cat: "ekstra", t: "Koji je tvoj 'nikad ne bi ispričao/la nikome' ali meni sad možeš?" },
{ cat: "ekstra", t: "Što bi volio/la da jednom probijem granicu koje se dosad nismo dotakli?" },
{ cat: "ekstra", t: "Koji je tvoj top ekstremni scenarij koji je samo za nas, nikad za druge?" },
{ cat: "ekstra", t: "Što bi htio/la da jednom budem u ulozi koja ti je uvijek bila intrigantna?" },
{ cat: "ekstra", t: "Koji je onaj scenario koji je toliko specifičan da ga znaš samo ti?" },
{ cat: "ekstra", t: "Što bi volio/la da jednom probamo nešto što nitko od naših znanca ne bi pomislio?" },
{ cat: "ekstra", t: "Koji je tvoj unutarnji filmski scenarij koji se odvija samo u tvojoj glavi?" },
{ cat: "ekstra", t: "Što bi htio/la da jednom probamo s elementom iznenađenja gdje niti jedan ne zna plan?" },
{ cat: "ekstra", t: "Koji je onaj tvoj ekstremno osobni turn-on koji nisi ni sam/a sebi priznavao/la?" },
{ cat: "ekstra", t: "Što bi htio/la da jednom probamo što si vidio/la negdje i ostalo ti u glavi?" },
{ cat: "ekstra", t: "Koji je tvoj 'tko god pita ne bi razumio' scenarij između nas?" },
{ cat: "ekstra", t: "Što bi rekao/la da imam apsolutno povjerenje i slobodne ruke večeras?" },
{ cat: "ekstra", t: "Koji te je naš moment natjerao da se osjećaš kao da nisi ni ti?" },
{ cat: "ekstra", t: "Što bi volio/la probati jednom što zvuči 'previše' ali zapravo te vuče?" },
{ cat: "ekstra", t: "Koji je tvoj odgovor na 'sve što tražiš jest tvoje večeras — bez granica'?" },
{ cat: "ekstra", t: "Što bi htio/la da jednom budeš u potpunoj tami i samo osjetiš — bez vizualnog?" },
{ cat: "ekstra", t: "Koji je tvoj spicy imaginarni scenarij koji te uvijek uzbuđuje a nisi ga nikad živio/la?" },
{ cat: "ekstra", t: "Što bi rekao/la da mogu biti savršena verzija svega što si zamišljao/la?" },
{ cat: "ekstra", t: "Koji je onaj scenarij koji počinje nevino ali eskalira na način koji te zapali?" },
{ cat: "ekstra", t: "Što bi volio/la da jednom imamo dogovor — bez pitanja, samo jest?" },
{ cat: "ekstra", t: "Koji je tvoj 'jednom u životu' fantazijski scenarij koji se tiče naše intimnosti?" },
{ cat: "ekstra", t: "Što bi htio/la da jednom jednosmjerno zapišeš i staviš ispod jastuka za mene?" },
{ cat: "ekstra", t: "Koji je tvoj odgovor na 'recite mi nešto o sebi što me odmah uzbuđuje'?" },
{ cat: "ekstra", t: "Što misliš da nismo ni svjesni da nas oboje privlači — a dosad nismo probali?" },
{ cat: "ekstra", t: "Koji je tvoj odgovor na pitanje: 'što bi sebi u 18 godina savjetovao/la o intimnosti?'" },
{ cat: "ekstra", t: "Što bi htio/la da jednom probamo kad nemamo sat vremena nego cijelu noć?" },
{ cat: "ekstra", t: "Koji je tvoj odgovor na 'ko si ti kad nitko ne gleda u intimitetu'?" },
{ cat: "ekstra", t: "Što bi volio/la da jednom zabilježimo — za nas — samo da postoji?" },
{ cat: "ekstra", t: "Koji je tvoj ultra osobni cilj u našoj intimnosti koji još nisi izrekao/la naglas?" },
{ cat: "ekstra", t: "Što bi rekao/la da imam moć da ispunim jednu stvar bez komplikacija?" },
{ cat: "ekstra", t: "Koji je onaj scenarij koji te uzbuđuje ali te i malo plaši koliko te privlači?" },
{ cat: "ekstra", t: "Što bi htio/la da jednom imamo potpuno slobodan vikend — bez socijalnih normi?" },
{ cat: "ekstra", t: "Koji je tvoj top 1 scenarij koji misliš da ne bih prihvatio/la ali bi prihvatio/la?" },
{ cat: "ekstra", t: "Što bi volio/la da jednom jedan od nas napiše drugi sve što želi — bukvalno sve?" },
{ cat: "ekstra", t: "Koji je tvoj intimni san koji nikad nisi ispričao/la jer nisi znao/la kako početi?" },
{ cat: "ekstra", t: "Što bi me pitao/la da znaš da ću odgovoriti 100% iskreno bez suda?" },
{ cat: "ekstra", t: "Koji je tvoj 'forbidden fruit' scenarij koji te muči jer ga ne probaš?" },
{ cat: "ekstra", t: "Što bi htio/la da probamo jednom jer smo sigurni jedno uz drugo — što god to bilo?" },
{ cat: "ekstra", t: "Koji je tvoj odgovor na 'zamislite da sve može — što je top 1'?" },
{ cat: "ekstra", t: "Što bi volio/la da jednom ne planiramo ništa i vidimo što se dogodi prirodno?" },
{ cat: "ekstra", t: "Koji je tvoj scenarij koji bi mi trebalo ispripovijedati kao priču — detalj po detalj?" },
{ cat: "ekstra", t: "Što bi htio/la da jednom budem ja koji opisujem sve dok to radiš?" },
{ cat: "ekstra", t: "Koji je tvoj intimni 'wish list' koji nikad nisi sastavili zajedno?" },
{ cat: "ekstra", t: "Što bi volio/la da jednom nema kompromisa — samo ono što ti hoćeš?" },
{ cat: "ekstra", t: "Koji je tvoj odgovor na 'ako bi imao/la savršenu intimnu večer — kako počinje?'" },
{ cat: "ekstra", t: "Što bi rekao/la da ti kažem da te gledam kao da te vidim prvi put?" },

];

/* ── CATEGORY META ── */
const CAT_META = {
  soft:    { label: "💙 NJEŽNO",       col: "var(--cyan)" },
  srednje: { label: "🔶 ZAGRIJAVANJE", col: "var(--neon-orange)" },
  "vruće": { label: "🔥 VRUĆE",        col: "var(--hot-pink)" },
  tantric: { label: "🌀 TANTRIK",      col: "#CF80FF" },
  spicy:   { label: "🌶️ SPICY",       col: "var(--lime)" },
  ekstra:  { label: "⚡ EKSTRA",       col: "var(--sunny-yellow)" },
};

/* ── STATE ── */
let pool = [];
let used = [];
let skipped = 0;
let total = 0;
let activeCategories = new Set(["soft", "srednje", "vruće", "tantric", "spicy", "ekstra"]);

/* ── POOL ── */
function buildPool() {
  pool = allQ.filter(q => activeCategories.has(q.cat));
  pool = pool.sort(() => Math.random() - 0.5);
  used = [];
}

function getQuestion() {
  if (pool.length === 0) {
    if (used.length === 0) return null;
    pool = used.sort(() => Math.random() - 0.5);
    used = [];
    showToast("🔄 Krug završen — vrtimo ispočetka!");
  }
  const idx = Math.floor(Math.random() * pool.length);
  const q = pool[idx];
  pool.splice(idx, 1);
  used.push(q);
  return q;
}

/* ── ANIMATION ── */
function animateCard(cb) {
  const card = document.getElementById('card');
  card.classList.add('flip-out');
  setTimeout(() => {
    card.classList.remove('flip-out');
    cb();
    card.classList.add('flip-in');
    setTimeout(() => card.classList.remove('flip-in'), 300);
  }, 260);
}

/* ── RENDER ── */
function renderQuestion(q) {
  const el     = document.getElementById('questionText');
  const catEl  = document.getElementById('catLabel');
  const qNum   = document.getElementById('qNum');
  const tail   = document.getElementById('bubbleTail');
  const card   = document.getElementById('card');
  const meta   = CAT_META[q.cat];

  el.textContent = q.t;
  el.classList.remove('empty');

  catEl.textContent = meta.label;
  catEl.style.color = meta.col;
  catEl.style.borderColor = meta.col;

  card.style.borderColor = meta.col;
  card.style.boxShadow = `6px 6px 0 rgba(0,0,0,0.4), 0 0 30px ${meta.col}33`;

  tail.style.display = 'block';
  tail.style.borderTopColor = meta.col;

  qNum.textContent = `#${total}`;
  updateStats();
}

/* ── ACTIONS ── */
function nextQuestion() {
  if (activeCategories.size === 0) {
    showToast("Odaberi barem jednu kategoriju!");
    return;
  }
  const btn = document.getElementById('btnGen');
  btn.classList.add('pressed');
  setTimeout(() => btn.classList.remove('pressed'), 200);

  total++;
  const q = getQuestion();
  if (!q) { showToast("Odaberi barem jednu kategoriju!"); total--; return; }
  animateCard(() => renderQuestion(q));
}

function skipQuestion() {
  const el = document.getElementById('questionText');
  if (!el.textContent || el.classList.contains('empty')) return;
  skipped++;
  total++;
  const q = getQuestion();
  if (!q) return;
  animateCard(() => renderQuestion(q));
}

/* ── STATS ── */
function updateStats() {
  document.getElementById('statTotal').textContent   = total;
  document.getElementById('statSkipped').textContent = skipped;
  document.getElementById('statLeft').textContent    = pool.length;

  const pct = used.length + pool.length > 0
    ? (used.length / (used.length + pool.length)) * 100
    : 0;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent =
    `${used.length} / ${used.length + pool.length} odigranih u krugu`;
}

/* ── TOAST ── */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ── CATEGORY CHIPS ── */
document.getElementById('catRow').addEventListener('click', function(e) {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  const cat = chip.dataset.cat;
  if (activeCategories.has(cat)) {
    if (activeCategories.size === 1) {
      showToast("Barem jedna kategorija mora biti aktivna!");
      return;
    }
    activeCategories.delete(cat);
    chip.classList.remove('active');
  } else {
    activeCategories.add(cat);
    chip.classList.add('active');
  }
  buildPool();
  updateStats();
});

/* ── BUTTONS ── */
document.getElementById('btnGen').addEventListener('click', nextQuestion);
document.getElementById('btnSkip').addEventListener('click', skipQuestion);

/* ── INIT ── */
buildPool();
updateStats();
