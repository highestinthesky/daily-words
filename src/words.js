// Each line: word | part of speech | plain-language meaning | everyday example.
// The bank aims above everyday vocabulary: words a well-read adult is unlikely
// to know. Namesakes (Freudian, quixotic) are left out on purpose.

// The bank as it ran from launch. Its rows and their order stay fixed so past
// editions, and the archive, keep the words people actually saw.
const firstRows = `
incisive|adj.|Sharply clear and direct about what really matters.|Her incisive question ended a debate that had run all period.
cogent|adj.|Clear, logical, and convincing.|He made a cogent case for moving the test to Friday.
trenchant|adj.|Sharp, forceful, and often critical.|The editorial offered a trenchant critique of the new dress code.
perspicacious|adj.|Quick to notice and understand what others miss.|A perspicacious reader will spot the twist by chapter three.
perspicuous|adj.|Expressed so clearly that it is easy to follow.|Her perspicuous lab report needed no extra explanation.
pellucid|adj.|Perfectly clear, whether water or writing.|Her pellucid prose made a dense topic feel simple.
limpid|adj.|Clear and transparent, like still water.|We could see every pebble through the limpid stream.
sagacious|adj.|Wise, with sound and practical judgment.|Our sagacious coach knew exactly when to call a timeout.
prescient|adj.|Seeming to know what will happen before it does.|His prescient decision to back up the files saved our project.
adroit|adj.|Skillful and clever, especially in tricky situations.|She made an adroit change of subject when grades came up.
maladroit|adj.|Clumsy or awkward, in movement or in handling people.|His maladroit apology only made her angrier.
circumspect|adj.|Careful to consider risks before acting.|Be circumspect about what you post before applying to college.
chary|adj.|Cautious and reluctant, especially about a risk.|She was chary of lending her notes after last time.
erudite|adj.|Showing deep and wide learning.|The erudite guest speaker quoted three languages in one answer.
rarefied|adj.|Exclusive and far removed from ordinary life.|National debate finals feel like a rarefied world of jargon.
recondite|adj.|Little known and understood by only a few experts.|He loves recondite facts about medieval siege engines.
abstruse|adj.|Difficult to understand because it is so complex.|The abstruse proof took our whole class a week to follow.
arcane|adj.|Mysterious and known only to a few.|The club has arcane rules nobody remembers writing.
equivocal|adj.|Open to more than one interpretation, often on purpose.|The principal gave an equivocal answer about the snow day.
inscrutable|adj.|Impossible to read or understand.|The judge kept an inscrutable face through every speech.
gnomic|adj.|Short and wise-sounding but hard to interpret.|Our coach's gnomic advice was just ‘Play the space.’
oracular|adj.|Mysterious and prophetic in tone.|She gave an oracular smile and said the results would surprise us.
aphoristic|adj.|Expressed in short, memorable statements of truth.|Grandpa speaks in an aphoristic style, all one-liners.
pithy|adj.|Brief, clever, and full of meaning.|Her pithy caption got more likes than the photo.
sententious|adj.|Given to pompous moralizing.|The sententious speech lectured us about phones for twenty minutes.
loquacious|adj.|Talking a great deal, often with ease and charm.|Our loquacious tour guide never let a silence last.
garrulous|adj.|Talking too much, especially about unimportant things.|A garrulous passenger described her whole family tree.
voluble|adj.|Speaking easily, rapidly, and at length.|He turns voluble the moment anyone mentions space travel.
prolix|adj.|Using too many words; tediously long.|Cut the prolix intro and start with your thesis.
periphrastic|adj.|Using many words where a few would do.|‘In the event that’ is a periphrastic way to say ‘if.’
sesquipedalian|adj.|Fond of long words, or made of long words.|His sesquipedalian essay sent the teacher to a dictionary.
grandiloquent|adj.|Pompous and showy in speech or writing.|The grandiloquent campaign speech promised a ‘renaissance of lunch.’
bombastic|adj.|Using inflated language to sound important.|Ignore the bombastic trailer; the movie is quiet and sweet.
orotund|adj.|Full-voiced and imposing, or pompous in style.|The announcer's orotund voice filled the gym.
turgid|adj.|Swollen; of writing, dense and pompous.|The turgid textbook chapter put half the class to sleep.
taciturn|adj.|Saying very little by nature.|Our taciturn lab partner spoke only to correct the units.
reticent|adj.|Reluctant to share thoughts or feelings.|He was reticent about his audition until the cast list came out.
diffident|adj.|Shy and lacking confidence in yourself.|The diffident freshman turned out to be our best debater.
brusque|adj.|Abrupt and short in a way that seems rude.|The coach's brusque ‘Again’ was all the feedback we got.
mordant|adj.|Biting and sharply sarcastic in humor.|Her mordant review called the sequel ‘a nap with explosions.’
acerbic|adj.|Sharp and harsh in tone or wit.|The acerbic critic rarely liked anything.
vitriolic|adj.|Filled with bitter, cruel hostility.|The comments section turned vitriolic within an hour.
acrimonious|adj.|Bitter and angry, especially in an argument.|The group chat split after an acrimonious fight over weekend plans.
vituperative|adj.|Bitterly abusive in language.|He deleted his vituperative reply before sending it.
splenetic|adj.|Bad-tempered and spiteful.|A splenetic customer yelled at the cashier over a coupon.
irascible|adj.|Easily made angry.|The irascible neighbor yells whenever a ball lands in his yard.
choleric|adj.|Hot-tempered and quick to anger.|The choleric referee handed out three cards in ten minutes.
captious|adj.|Quick to find fault over small things.|A captious reviewer complained mostly about the font.
censorious|adj.|Severely critical of others.|Her censorious tone made everyone afraid to share drafts.
pejorative|adj.|Expressing contempt or disapproval.|‘Nerd’ was once pejorative, but now we wear it proudly.
scurrilous|adj.|Spreading scandalous claims to damage a reputation.|The scurrilous rumor about the candidate was entirely false.
seditious|adj.|Urging people to rebel against authority.|The government banned the newspaper as seditious.
iconoclastic|adj.|Attacking cherished beliefs or traditions.|Her iconoclastic essay argued that homework should be abolished.
heterodox|adj.|Departing from accepted beliefs.|He holds heterodox views on how history should be taught.
doctrinaire|adj.|Rigidly applying a theory regardless of practical results.|A doctrinaire reading of the rules ignored common sense.
hidebound|adj.|Unwilling to change because of tradition or habit.|The hidebound committee rejected every new idea.
fusty|adj.|Stuffy, musty, and old-fashioned.|The fusty attic smelled of dust and mothballs.
staid|adj.|Respectable and serious, but dull.|The staid assembly woke up when the jazz band started.
stolid|adj.|Calm, dependable, and showing little emotion.|The stolid guard did not blink at the tourists' jokes.
phlegmatic|adj.|Calm and hard to excite or upset.|Our phlegmatic goalie never panics on penalties.
imperturbable|adj.|Impossible to upset or rattle.|The imperturbable pilot cracked jokes through the turbulence.
equanimous|adj.|Calm and even-tempered, even when things go wrong.|She stayed equanimous when her laptop died mid-presentation.
blithe|adj.|Cheerfully carefree, sometimes carelessly so.|He showed blithe confidence about a test he never studied for.
insouciant|adj.|Casually unconcerned.|She gave an insouciant shrug at the hour-long line.
jaunty|adj.|Lively, cheerful, and self-confident.|He strolled in with a jaunty grin and no homework.
jocular|adj.|Fond of joking; playfully humorous.|The principal's jocular announcement made everyone laugh.
waggish|adj.|Humorous in a playful, mischievous way.|A waggish student renamed the Wi-Fi network ‘Homework Excuse.’
droll|adj.|Amusing in a dry or odd way.|His droll comments made the long drive go faster.
facetious|adj.|Joking about serious matters at the wrong time.|I was being facetious when I offered to write everyone's essays.
glib|adj.|Smooth and easy but shallow or insincere.|His glib answer skipped every hard question.
arch|adj.|Playfully knowing or teasing.|She gave me an arch look when I said I had ‘almost’ finished.
impudent|adj.|Disrespectful in a bold, cheeky way.|His impudent reply earned him a week of detention.
obstreperous|adj.|Noisy and hard to control.|An obstreperous fan was escorted out of the bleachers.
strident|adj.|Loud, harsh, and forceful.|Her strident voice cut through the cafeteria noise.
stertorous|adj.|Loud and labored, like heavy snoring.|Stertorous breathing came from the back row during the film.
euphonious|adj.|Pleasing to the ear.|‘Cellar door’ is often called a euphonious phrase.
mellifluous|adj.|Sweet, smooth, and pleasant to hear.|The narrator's mellifluous voice made the audiobook a joy.
dulcet|adj.|Sweet and soothing to hear.|I woke to the dulcet sound of rain instead of my alarm.
sonorous|adj.|Deep, full, and rich in sound.|The sonorous church bell carried across town.
plangent|adj.|Loud, resonant, and mournful.|The plangent cello line made the whole audience go quiet.
tremulous|adj.|Shaking slightly, often from nerves.|She read her poem in a tremulous voice.
febrile|adj.|Feverish; nervously excited.|The febrile mood before results day kept us all awake.
harried|adj.|Stressed by constant demands.|The harried barista juggled six orders at once.
beleaguered|adj.|Under constant pressure or attack.|The beleaguered goalie faced thirty shots.
indomitable|adj.|Impossible to defeat or discourage.|Her indomitable spirit carried the team through a losing season.
redoubtable|adj.|Formidable and worthy of respect.|We faced a redoubtable opponent in the semifinal.
doughty|adj.|Brave and persistent.|A doughty band of volunteers cleaned the whole beach.
stalwart|adj.|Loyal, reliable, and hardworking.|She has been a stalwart member of the robotics team.
indefatigable|adj.|Never tiring, no matter how long the work.|The indefatigable editor stayed until the paper went to print.
dauntless|adj.|Fearless and determined.|The dauntless hikers kept going through the storm.
effervescent|adj.|Bubbly, lively, and enthusiastic.|Her effervescent laugh brightened the whole room.
ebullient|adj.|Overflowing with cheerful energy.|The ebullient winners sprinted around the field.
effusive|adj.|Expressing feelings with great or excessive warmth.|His effusive thanks embarrassed the substitute.
rhapsodic|adj.|Extremely enthusiastic and full of emotion.|She was rhapsodic about the new album.
beatific|adj.|Blissfully happy and serene.|The baby gave a beatific smile after her nap.
sanguine|adj.|Hopeful and confident, especially in a hard spot.|The coach was sanguine about our chances despite the injuries.
convivial|adj.|Friendly, lively, and fun to be around.|The convivial dinner lasted three hours.
avuncular|adj.|Kind and friendly in the manner of an uncle.|The avuncular bus driver remembered every student's name.
solicitous|adj.|Showing attentive, caring concern.|The nurse was solicitous when I felt faint.
decorous|adj.|Polite and fitting for the occasion.|The decorous ceremony ended in a sudden water fight.
priggish|adj.|Self-righteously fussy about being correct.|His priggish reminder about the rules annoyed everyone.
sanctimonious|adj.|Acting morally superior to others.|His sanctimonious lecture on punctuality came ten minutes late.
supercilious|adj.|Behaving as if you are better than others.|The supercilious waiter sneered at our order.
imperious|adj.|Arrogant and expecting to be obeyed.|The imperious team captain gave orders even to the coach.
peremptory|adj.|Demanding immediate obedience, with no room for refusal.|A peremptory knock meant my mom had seen my grades.
magisterial|adj.|Authoritative and showing great expertise.|Her magisterial history of the city took a decade to write.
officious|adj.|Too eager to give orders or unwanted help.|The officious hall monitor checked our passes twice.
importunate|adj.|Persistently demanding to the point of annoyance.|My importunate little brother asked for a ride every hour.
obsequious|adj.|Too eager to please or obey.|The obsequious intern laughed at every one of the boss's jokes.
unctuous|adj.|Flattering in an oily, insincere way.|The unctuous salesman called everyone ‘my friend.’
sycophantic|adj.|Flattering powerful people to gain an advantage.|His sycophantic emails to the teacher fooled no one.
ingratiating|adj.|Trying to win favor, often insincerely.|She gave an ingratiating smile before asking for an extension.
servile|adj.|Excessively willing to obey or serve.|The servile assistant never questioned an order.
craven|adj.|Contemptibly cowardly.|Letting the group take the blame was a craven move.
pusillanimous|adj.|Lacking courage or resolve.|The pusillanimous council postponed the vote again.
timorous|adj.|Nervous and lacking confidence.|A timorous knock came from the new kid at the door.
skittish|adj.|Nervous and easily startled.|The skittish horse shied at every plastic bag.
feckless|adj.|Lacking initiative, strength, or responsibility.|The feckless treasurer lost the club's receipts.
indolent|adj.|Lazy and avoiding effort.|After an indolent summer, I had forty pages left to read.
torpid|adj.|Sluggish and lacking energy.|The heat made the whole class torpid after lunch.
lackadaisical|adj.|Lacking enthusiasm or effort.|Their lackadaisical defense let in three goals.
languid|adj.|Slow, relaxed, and lacking energy.|We spent a languid afternoon floating in the lake.
somnolent|adj.|Sleepy, or causing sleepiness.|The somnolent hum of the projector nearly knocked me out.
soporific|adj.|Causing sleep; extremely boring.|The soporific lecture had half the room nodding.
stultifying|adj.|Draining energy and interest through dullness or restriction.|Copying definitions for an hour is stultifying.
dilatory|adj.|Slow to act; tending to delay.|The dilatory committee still has not chosen a theme.
vertiginous|adj.|Causing dizziness, especially from height.|We looked down from the vertiginous glass bridge.
tortuous|adj.|Full of twists; overly complicated.|The tortuous mountain road took two hours.
sinuous|adj.|Curving and graceful in shape or movement.|The dancer's sinuous arms moved like water.
precipitous|adj.|Dangerously steep, or sudden and dramatic.|Attendance took a precipitous drop after spring break.
abstemious|adj.|Sparing in eating and drinking.|The abstemious runner skipped dessert before every race.
ascetic|adj.|Practicing strict self-denial.|He lives an ascetic life with a mattress and a laptop.
parsimonious|adj.|Extremely unwilling to spend money.|The parsimonious club refused to buy new jerseys.
penurious|adj.|Extremely poor, or very stingy.|Penurious grad students lived on instant noodles.
impecunious|adj.|Having little or no money.|An impecunious artist paid his rent in paintings.
profligate|adj.|Recklessly wasteful, especially with money.|His profligate spending on game skins emptied his savings.
prodigal|adj.|Spending money or resources freely and recklessly.|The prodigal heir sold the family house within a year.
venal|adj.|Willing to be bribed; corrupt.|The venal official approved any permit for cash.
venial|adj.|Minor and easily forgiven.|Being late once is a venial sin, not a crime.
avaricious|adj.|Extremely greedy for wealth.|The avaricious landlord raised the rent twice in a year.
rapacious|adj.|Aggressively greedy and grasping.|Rapacious developers bought up every empty lot.
louche|adj.|Disreputable, often in a way that is oddly appealing.|The louche jazz club stayed open until dawn.
raffish|adj.|Unconventional and slightly disreputable, but attractive.|The raffish actor showed up in a velvet suit.
rakish|adj.|Dashing, jaunty, and a little reckless.|He wore his cap at a rakish angle.
sartorial|adj.|Relating to clothing and style.|His sartorial choices include socks with sandals.
lissome|adj.|Slim, flexible, and graceful.|The lissome gymnast folded into a perfect pike.
hirsute|adj.|Very hairy, often in a shaggy way.|The hirsute drummer looked like a friendly bear.
winsome|adj.|Charming in a fresh, innocent way.|The winsome puppy charmed the entire waiting room.
resplendent|adj.|Dazzling and splendid in appearance.|The gym was resplendent with lights for the winter formal.
effulgent|adj.|Shining brightly; radiant.|The effulgent sunrise turned the whole valley gold.
incandescent|adj.|Glowing with heat, or intensely emotional.|She was incandescent with rage over the stolen idea.
crepuscular|adj.|Relating to twilight, or active at dusk.|Deer are crepuscular, so drive carefully at sunset.
diaphanous|adj.|Light, delicate, and almost see-through.|Diaphanous curtains billowed in the breeze.
evanescent|adj.|Quickly fading from sight or memory.|The evanescent rainbow vanished before I found my phone.
superannuated|adj.|Too old to be useful; outdated.|The library still runs on a superannuated computer.
anachronistic|adj.|Belonging to a different time period.|A wristwatch in a Roman epic is wonderfully anachronistic.
atavistic|adj.|Relating to ancient or ancestral instincts.|The smell of a campfire stirs something atavistic.
vestigial|adj.|Remaining as a small trace of something that once mattered.|The tailbone is a vestigial structure.
nugatory|adj.|Of no real value or importance.|The new rule had a nugatory effect on attendance.
otiose|adj.|Serving no practical purpose.|Delete the otiose second paragraph.
picayune|adj.|Petty and of little importance.|Let's skip the picayune complaints and fix the real problem.
sedulous|adj.|Showing steady, careful, and persistent effort.|Her sedulous practice turned a weak serve into a weapon.
assiduous|adj.|Showing great care and constant effort.|His assiduous notes became the whole class's study guide.
punctilious|adj.|Very careful about rules and proper behavior.|The punctilious librarian logged every overdue minute.
fastidious|adj.|Very attentive to accuracy, detail, and cleanliness.|The fastidious chef wiped every plate rim.
persnickety|adj.|Overly fussy about small details.|My persnickety cat will drink only running water.
fractious|adj.|Irritable, quarrelsome, and hard to control.|The fractious meeting ended without a vote.
refractory|adj.|Stubbornly resistant to control or treatment.|The refractory printer jammed on every page.
contumacious|adj.|Stubbornly and willfully disobedient.|The contumacious witness refused to answer the judge.
recalcitrant|adj.|Stubbornly refusing to obey or cooperate.|The recalcitrant toddler would not put on shoes.
intransigent|adj.|Refusing to compromise or change a position.|Both sides stayed intransigent over the budget.
obdurate|adj.|Stubbornly refusing to change your mind.|He remained obdurate despite the new evidence.
intractable|adj.|Hard to control, manage, or solve.|Downtown traffic is an intractable problem.
implacable|adj.|Impossible to calm, satisfy, or stop.|The implacable rival wanted a rematch every week.
inveterate|adj.|Long established and unlikely to change.|My uncle is an inveterate punster.
incorrigible|adj.|Impossible to correct or reform.|The incorrigible prankster struck again on the last day.
bellicose|adj.|Eager to fight or start a war.|The bellicose speech worried neighboring countries.
pugnacious|adj.|Quick to argue or fight.|The pugnacious debater challenged every single point.
truculent|adj.|Eager to argue or fight; aggressively defiant.|The truculent customer demanded to see the manager.
internecine|adj.|Destructive to both sides within a group.|Internecine feuds tore the student council apart.
vainglorious|adj.|Excessively proud and boastful.|His vainglorious victory lap came before the final whistle.
hubristic|adj.|Showing dangerous overconfidence.|Skipping practice before the final was hubristic.
overweening|adj.|Showing excessive confidence or pride.|Her overweening ambition alienated her teammates.
hegemonic|adj.|Dominating others through power or influence.|The company's hegemonic hold on search worries regulators.
ignominious|adj.|Deserving or causing public disgrace.|The champions suffered an ignominious first-round exit.
iniquitous|adj.|Grossly unfair or morally wrong.|The iniquitous tax fell hardest on the poor.
execrable|adj.|Extremely bad or unpleasant.|The cafeteria's execrable pizza is somehow still popular.
florid|adj.|Overly elaborate, or flushed with a red color.|His florid apology used the word ‘profoundly’ four times.
bespoke|adj.|Made to order for a particular person.|He wore a bespoke suit to the gala.
gauche|adj.|Socially awkward or tactless.|It felt gauche to ask how much her gift cost.
boorish|adj.|Rude, rough, and ill-mannered.|His boorish behavior at dinner embarrassed his parents.
churlish|adj.|Rude in a mean-spirited, ungracious way.|It would be churlish to refuse such a kind offer.
obtuse|adj.|Slow to understand, or insensitive.|Is he being obtuse, or does he really not get the hint?
benighted|adj.|Ignorant or unenlightened.|Future students may call our homework policy benighted.
credulous|adj.|Too ready to believe things.|Credulous viewers shared the fake video by the millions.
callow|adj.|Young and inexperienced.|The callow recruits learned fast during preseason.
guileless|adj.|Innocent and without any deception.|Her guileless question silenced the room.
ingenuous|adj.|Innocent, trusting, and frank.|The ingenuous freshman believed the rumor about a pool on the roof.
disingenuous|adj.|Pretending to be more honest or naive than you are.|It is disingenuous to say you never saw the deadline.
duplicitous|adj.|Deceitful; saying one thing while doing another.|The duplicitous character betrays everyone by the finale.
mendacious|adj.|Lying, or not telling the truth.|The mendacious ad promised results it could not deliver.
meretricious|adj.|Showy and attractive but without real value.|The meretricious sequel relied entirely on special effects.
specious|adj.|Seeming plausible but actually wrong.|His specious excuse did not survive one question.
spurious|adj.|False or based on faulty reasoning.|The study drew a spurious link between cereal and grades.
fallacious|adj.|Based on mistaken belief or faulty logic.|The argument is fallacious because it assumes its conclusion.
tendentious|adj.|Promoting a particular viewpoint, especially a contested one.|The tendentious documentary left out every opposing voice.
jejune|adj.|Naive and simplistic, or dull.|Her jejune views on politics changed after the internship.
puerile|adj.|Childishly silly.|The puerile joke still made the whole bus laugh.
sophomoric|adj.|Immature while acting knowledgeable.|His sophomoric essay mistook big words for big ideas.
fatuous|adj.|Silly and pointless, without seeming to realize it.|The fatuous advice was to ‘just be more motivated.’
vapid|adj.|Dull and lacking ideas or energy.|The vapid reality show had no plot at all.
insipid|adj.|Lacking flavor, interest, or energy.|The insipid soup tasted mostly of hot water.
vacuous|adj.|Showing a lack of thought or intelligence.|The influencer's vacuous answer said nothing at all.
hackneyed|adj.|Overused and no longer original.|‘It was all a dream’ is a hackneyed ending.
quotidian|adj.|Ordinary and part of everyday life.|Her poems find beauty in quotidian chores.
prosaic|adj.|Ordinary and lacking imagination.|The explanation was more prosaic than the rumor.
anodyne|adj.|So mild and inoffensive that it is bland.|The anodyne speech offended no one and inspired no one.
risible|adj.|So ridiculous it invites laughter.|The villain's risible disguise was just a mustache.
mawkish|adj.|Sentimental in a sickly or exaggerated way.|The mawkish ending had violins swelling over a dog's goodbye.
saccharine|adj.|Excessively sweet or sentimental.|The saccharine greeting card made me cringe.
cloying|adj.|So sweet or sentimental it becomes unpleasant.|The cloying frosting made my teeth hurt.
histrionic|adj.|Overly theatrical or dramatic.|His histrionic groan at the pop quiz got a laugh.
lachrymose|adj.|Tearful, or tending to cause tears.|The lachrymose finale left the whole theater sniffling.
lugubrious|adj.|Mournful and gloomy, often exaggeratedly.|The basset hound gave me a lugubrious look.
elegiac|adj.|Mournful, especially about something lost.|The yearbook's elegiac tone made the seniors cry.
dolorous|adj.|Full of grief or sorrow.|A dolorous song played as the credits rolled.
woebegone|adj.|Looking sad and miserable.|The woebegone puppy sat outside in the rain.
disconsolate|adj.|Unable to be comforted; deeply unhappy.|The disconsolate fans sat in the stands long after the loss.
contrite|adj.|Sincerely sorry for having done wrong.|A contrite note appeared on my desk the next day.
rueful|adj.|Expressing regret, often with a wry sadness.|He gave a rueful smile at his old haircut.
funereal|adj.|Gloomy and solemn, as if mourning a death.|The locker room was funereal after the loss.
sepulchral|adj.|Gloomy like a tomb, or deep and hollow in sound.|The empty museum had a sepulchral silence.
lurid|adj.|Shocking and sensational, or unnaturally bright.|The tabloid printed lurid details of the scandal.
eldritch|adj.|Weird, eerie, and unsettling.|An eldritch shriek came from the abandoned house.
baleful|adj.|Threatening harm; menacing.|The cat gave the vacuum a baleful stare.
portentous|adj.|Ominously significant, or self-importantly solemn.|The portentous music warned us that something was coming.
numinous|adj.|Having a mysterious, spiritual quality.|The redwood forest felt numinous at dawn.
ineffable|adj.|Too great or strange to be put into words.|The view from the summit gave her an ineffable calm.
liminal|adj.|At the boundary between one stage and the next.|The last week of senior year feels strangely liminal.
inexorable|adj.|Impossible to stop or prevent.|The inexorable rise of sea levels threatens coastal towns.
ineluctable|adj.|Impossible to avoid or escape.|Bedtime was ineluctable, no matter how I argued.
immutable|adj.|Never changing or unable to be changed.|My grandmother treats the family recipe as immutable law.
sacrosanct|adj.|Too important to be changed or questioned.|In our house, Sunday breakfast is sacrosanct.
inviolable|adj.|Never to be broken or dishonored.|A promise to my sister is inviolable.
unimpeachable|adj.|Entirely trustworthy; beyond doubt.|The witness had an unimpeachable reputation.
axiomatic|adj.|Taken as obviously true without proof.|It is axiomatic in our house that dessert needs no reason.
tautological|adj.|Saying the same thing twice in different words.|‘Free gift’ is tautological, since gifts are always free.
inchoate|adj.|Not yet fully formed or developed.|I had only an inchoate idea for my college essay.
incipient|adj.|Just beginning to appear or develop.|She felt an incipient headache at the start of the exam.
nascent|adj.|Just coming into existence and beginning to grow.|The nascent robotics club has four members and big plans.
quiescent|adj.|Quiet, inactive, or dormant for now.|The volcano has been quiescent for centuries.
ostensible|adj.|Stated as true, though perhaps only on the surface.|The ostensible reason for the meeting was free snacks.
tacit|adj.|Understood or implied without being said.|We had a tacit agreement never to mention the incident.
tenuous|adj.|Very weak, slight, or poorly supported.|The connection between the two cases is tenuous.
apocryphal|adj.|Widely told but probably not true.|The apocryphal story says the principal once toured with a band.
perfunctory|adj.|Done quickly as a duty, without care or interest.|He gave a perfunctory wave and kept walking.
desultory|adj.|Lacking a plan, purpose, or enthusiasm.|We made desultory conversation while waiting for the bus.
salient|adj.|Most noticeable or important.|Highlight only the salient points in your summary.
germane|adj.|Relevant to the subject being discussed.|Keep your comments germane to the reading.
apposite|adj.|Especially suitable and appropriate.|She found an apposite quote to open her speech.
auspicious|adj.|Suggesting future success.|Winning the first game was an auspicious start.
propitious|adj.|Favorable and likely to lead to success.|The calm weather was propitious for the launch.
fortuitous|adj.|Happening by lucky chance.|A fortuitous wrong turn led us to the best taco stand in town.
adventitious|adj.|Happening by chance, or coming from outside.|Their adventitious meeting came from a delayed train.
aleatory|adj.|Depending on chance or luck.|The card game is aleatory; skill hardly matters.
seminal|adj.|Strongly influencing later work or developments.|That seminal album shaped a whole generation of bands.
epochal|adj.|Significant enough to mark a new era.|The smartphone was an epochal invention.
cataclysmic|adj.|Causing sudden, violent upheaval.|A cataclysmic flood reshaped the valley.
parlous|adj.|Full of danger or uncertainty.|The club's finances are in a parlous state.
inextricable|adj.|Impossible to separate or escape.|Music is inextricable from her sense of self.
endemic|adj.|Regularly found in a particular place or group.|Procrastination is endemic among high school seniors.
rife|adj.|Widespread, especially of something bad.|The forum was rife with spoilers.
multifarious|adj.|Many and of many different kinds.|Her multifarious interests range from fencing to beekeeping.
motley|adj.|Made of very different, mismatched parts.|A motley crew of volunteers built the parade float.
polyglot|adj.|Knowing or using several languages.|The polyglot city has street signs in six languages.
capricious|adj.|Changing mood or behavior suddenly and unpredictably.|The capricious spring weather ruined three picnics.
impetuous|adj.|Acting quickly without thinking it through.|My impetuous decision to dye my hair blue had consequences.
solipsistic|adj.|So self-absorbed that only your own view seems real.|His solipsistic rant assumed everyone cared about his playlist.
peripatetic|adj.|Traveling from place to place.|My peripatetic childhood meant five schools in six years.
errant|adj.|Straying from the proper course or standards.|An errant ball smashed the greenhouse window.
parochial|adj.|Having a narrow, local outlook.|The parochial debate ignored the rest of the world.
munificent|adj.|Extremely generous.|A munificent donor paid for the new auditorium.
bumptious|adj.|Loudly and annoyingly full of yourself.|The bumptious new captain gave a speech nobody asked for.
conciliatory|adj.|Intended to calm anger and restore goodwill.|He sent a conciliatory text after the argument.
lambent|adj.|Softly glowing, or lightly and brilliantly playful.|Lambent candlelight flickered across the table.
virtuosic|adj.|Showing exceptional technical skill.|His virtuosic guitar solo earned a standing ovation.
inimitable|adj.|So unique that it cannot be copied.|Grandma's inimitable laugh carried across the restaurant.
effete|adj.|Weak and ineffectual from too much refinement.|The effete aristocrats in the novel cannot change a tire.
cantankerous|adj.|Bad-tempered and argumentative.|The cantankerous old car only starts if you kick it.
ersatz|adj.|Made as an inferior imitation of something.|The ersatz coffee tasted like burnt toast.
erstwhile|adj.|Former; in the past.|My erstwhile best friend now sits at another table.
vexed|adj.|Much debated and difficult, or annoyed.|Phone use in class is a vexed question.
urbane|adj.|Polished, confident, and courteous.|The urbane host made every guest feel welcome.
onerous|adj.|Burdensome and difficult to carry out.|Writing three essays in one weekend was onerous.
fulsome|adj.|Excessively flattering, or generous in amount.|Her fulsome praise for the soggy cake was hard to believe.
scintillating|adj.|Brilliantly clever, lively, or sparkling.|The scintillating debate kept us talking for days.
elucidate|verb|To make something clear by explaining it.|Can you elucidate the difference between weather and climate?
expound|verb|To explain or describe an idea in detail.|The professor expounded on black holes for an hour.
adumbrate|verb|To outline faintly or hint at what is coming.|The first chapter adumbrates the tragedy to come.
delineate|verb|To describe or mark something precisely.|The syllabus delineates each assignment's deadline.
substantiate|verb|To provide evidence that something is true.|You need data to substantiate that claim.
corroborate|verb|To confirm with additional evidence.|Two witnesses corroborated her story.
vindicate|verb|To clear of blame or prove right.|The replay vindicated the referee's call.
exculpate|verb|To show or declare that someone is not guilty.|The security footage exculpated the accused student.
rebut|verb|To argue that a claim is false.|She rebutted every point in her opponent's speech.
gainsay|verb|To deny or contradict.|No one could gainsay her years of experience.
impugn|verb|To challenge someone's honesty or motives.|He impugned my motives for volunteering.
posit|verb|To put forward an idea as a basis for argument.|The essay posits that boredom drives creativity.
surmise|verb|To guess from limited evidence.|I surmised from her face that the test went badly.
extrapolate|verb|To estimate beyond known facts by following a trend.|You can't extrapolate a whole season from one game.
conflate|verb|To mix two different things together as if they were one.|Don't conflate popularity with quality.
construe|verb|To interpret in a particular way.|She construed my silence as agreement.
elide|verb|To leave out or merge, glossing over differences.|The summary elides the messiest parts of the story.
emend|verb|To correct and improve a text.|The editor emended the article before printing.
obfuscate|verb|To make something deliberately unclear.|The long memo seemed to obfuscate a simple answer.
equivocate|verb|To use vague language to avoid committing.|The candidate equivocated on every hard question.
prevaricate|verb|To avoid the truth by speaking evasively.|Stop prevaricating and tell me who ate my fries.
dissemble|verb|To hide your true feelings or motives.|He dissembled his nerves behind a big grin.
tergiversate|verb|To change sides or make evasive statements.|The senator tergiversated so often that no one trusted him.
temporize|verb|To delay a decision to gain time.|The principal temporized until parents stopped asking.
vacillate|verb|To waver between options or opinions.|I vacillated between two colleges for weeks.
dither|verb|To be nervously indecisive.|We dithered so long that the movie sold out.
demur|verb|To raise an objection or show reluctance.|She demurred when asked to give the speech.
cavil|verb|To raise petty, unnecessary objections.|He caviled about the font size on the flyer.
quibble|verb|To argue about trivial details.|Let's not quibble over who sits where.
belabor|verb|To explain or argue more than needed.|I won't belabor the point; just turn in your forms.
bloviate|verb|To talk at length in a pompous, empty way.|The guest bloviated about leadership for an hour.
pontificate|verb|To give opinions in a pompous, know-it-all way.|My uncle pontificates about football every holiday.
expatiate|verb|To speak or write at great length on a topic.|She expatiated on the history of every painting.
harangue|verb|To lecture someone in a loud, aggressive way.|The coach harangued us after the sloppy loss.
fulminate|verb|To protest loudly and angrily.|Fans fulminated online about the trade.
inveigh|verb|To speak or write bitterly against something.|The columnist inveighed against standardized testing.
remonstrate|verb|To protest or object forcefully.|We remonstrated with the bus driver about the skipped stop.
castigate|verb|To criticize or punish severely.|The report castigated the company for its safety record.
excoriate|verb|To criticize with great severity.|Critics excoriated the remake as soulless.
lambaste|verb|To criticize harshly.|The review lambasted the band's new album.
upbraid|verb|To scold or criticize sharply.|She upbraided her brother for using all the hot water.
berate|verb|To scold angrily and at length.|The manager berated the cashier in front of customers.
admonish|verb|To warn or scold firmly.|The librarian admonished us for laughing too loudly.
pillory|verb|To ridicule or attack publicly.|The internet pilloried the brand for its tone-deaf ad.
lampoon|verb|To mock publicly through satire.|The comedy show lampooned the school board.
traduce|verb|To speak badly of someone and damage their reputation.|He traduced his former coach in a podcast interview.
vilify|verb|To speak or write about someone in an abusive way.|The tabloids vilified the referee after the final.
malign|verb|To say unfair, harmful things about someone.|Rumors maligned her for weeks before the truth came out.
denigrate|verb|To unfairly criticize or belittle.|Don't denigrate the freshmen; we were all new once.
disparage|verb|To speak of as having little value.|He disparaged her art as ‘just doodles.’
besmirch|verb|To damage someone's reputation.|The scandal besmirched the team's proud history.
sully|verb|To stain or damage the purity of.|One bad call sullied an otherwise great game.
decry|verb|To publicly denounce.|Activists decried the plan to close the library.
rail|verb|To complain bitterly or angrily.|He railed against the new parking fees.
skewer|verb|To criticize or mock sharply.|The comedian skewered both candidates equally.
repudiate|verb|To reject or deny the validity of.|The scientist repudiated the misleading headline.
recant|verb|To publicly withdraw a statement or belief.|The witness recanted her earlier testimony.
abjure|verb|To solemnly reject a belief or claim.|He abjured his old habits after the health scare.
forswear|verb|To give up or renounce firmly.|Every exam week, I forswear energy drinks for good.
abrogate|verb|To formally abolish or cancel.|The new treaty abrogated the old trade agreement.
rescind|verb|To cancel or take back officially.|The college rescinded his offer after the incident.
gird|verb|To prepare yourself for something difficult.|We girded ourselves for a week of back-to-back finals.
contravene|verb|To break a law or rule.|The parking lot party contravened school policy.
flout|verb|To openly disregard a rule or convention.|They flouted the dress code with matching capes.
obviate|verb|To remove a need or difficulty in advance.|A shared calendar obviates endless group texts.
preclude|verb|To make something impossible in advance.|The injury precludes her from playing this season.
forestall|verb|To prevent by acting first.|We left early to forestall the traffic.
stymie|verb|To block or hinder progress.|A missing permission slip stymied our field trip.
hamstring|verb|To severely limit someone's effectiveness.|A tiny budget can hamstring an entire theater department.
circumvent|verb|To find a way around a rule or obstacle.|Students circumvented the filter with a proxy.
supersede|verb|To take the place of something older.|The new edition supersedes the old textbook.
supplant|verb|To replace, often by force or scheming.|Streaming has supplanted cable in most homes.
usurp|verb|To seize power or a position illegally.|The younger brother usurped the throne.
arrogate|verb|To claim something without having the right.|He arrogated credit for the whole project.
kvetch|verb|To complain persistently.|My brother kvetched about the drive the whole way there.
wrest|verb|To pull away by force or effort.|She wrested the ball from the defender.
purloin|verb|To steal, usually something small.|Someone purloined my favorite pen again.
filch|verb|To steal something casually.|He filched a cookie from the tray on his way out.
abscond|verb|To leave secretly, often with something not yours.|The cat absconded with the turkey leg.
bilk|verb|To cheat someone out of money.|The scam bilked retirees out of their savings.
cozen|verb|To trick or deceive.|He cozened his way into the VIP section.
hoodwink|verb|To deceive or trick.|The April Fools' prank hoodwinked half the school.
hornswoggle|verb|To swindle or bamboozle.|We got hornswoggled into buying fake concert tickets.
finagle|verb|To obtain through cleverness or trickery.|She finagled two extra days on the deadline.
inveigle|verb|To persuade someone through flattery or deception.|He inveigled me into joining the dance committee.
cajole|verb|To persuade with flattery or gentle coaxing.|We cajoled Dad into ordering pizza.
wheedle|verb|To coax someone with flattery or sweet talk.|My brother wheedled ten dollars out of Grandma.
blandish|verb|To coax with flattery.|She blandished the teacher with compliments before asking for a curve.
beguile|verb|To charm, sometimes in a deceptive way.|The magician beguiled the audience with misdirection.
collude|verb|To cooperate secretly for a dishonest purpose.|The two companies colluded to fix prices.
connive|verb|To secretly plot or allow wrongdoing.|They connived to get the class trip moved to the beach.
foment|verb|To stir up trouble or conflict.|Anonymous accounts fomented unrest online.
abet|verb|To help or encourage wrongdoing.|His friend abetted the prank by holding the ladder.
dragoon|verb|To force someone into doing something.|I was dragooned into playing a tree in the school play.
goad|verb|To provoke or urge someone into action.|They goaded him into jumping in the cold lake.
nettle|verb|To irritate or annoy.|Her smug tone nettled everyone in the meeting.
rankle|verb|To cause lasting irritation or resentment.|Losing on a technicality still rankles.
discomfit|verb|To make someone uneasy or embarrassed.|The unexpected question discomfited the speaker.
flummox|verb|To completely confuse.|The last question flummoxed the entire class.
transmogrify|verb|To transform in a surprising or magical way.|The art club transmogrified the gym into a jungle.
mollify|verb|To soothe someone's anger or anxiety.|Free pizza mollified the angry crowd.
placate|verb|To make someone less angry by giving in a little.|She placated her brother with the last slice.
propitiate|verb|To win favor by doing something pleasing.|We propitiated the cat with extra treats.
assuage|verb|To make an unpleasant feeling less intense.|A hug assuaged his fear before surgery.
allay|verb|To reduce or put to rest a fear or doubt.|The doctor allayed my worries about the scan.
palliate|verb|To ease symptoms, or make a fault seem less bad.|Ice palliated the pain but did not heal the ankle.
ameliorate|verb|To make a bad situation better.|Extra buses ameliorated the morning crowding.
attenuate|verb|To weaken or reduce in strength.|The thick walls attenuated the noise from the street.
buttress|verb|To support or strengthen.|She buttressed her argument with three studies.
embolden|verb|To give someone courage.|The crowd's cheers emboldened the nervous singer.
burnish|verb|To polish, or to improve a reputation.|He volunteered to burnish his college application.
edify|verb|To improve someone morally or intellectually.|The documentary was meant to edify, not entertain.
inculcate|verb|To instill an idea through repeated teaching.|My parents inculcated a love of reading early.
exhort|verb|To strongly urge or encourage.|The coach exhorted us to leave everything on the field.
enjoin|verb|To order or urge someone to do something.|The rules enjoin players to shake hands after each match.
adjure|verb|To urge or command solemnly.|She adjured us to tell the truth.
apprise|verb|To inform or tell someone about something.|Please apprise me of any schedule changes.
aver|verb|To state confidently as fact.|He averred that he had never seen the missing phone.
opine|verb|To state an opinion.|Everyone opined about the finale online.
augur|verb|To be a sign of a future outcome.|A strong preseason augurs well for the team.
portend|verb|To be a warning sign of something to come.|Dark clouds portended a ruined picnic.
prognosticate|verb|To predict or forecast.|Analysts prognosticated a landslide that never came.
cogitate|verb|To think deeply and carefully.|She cogitated on the riddle all afternoon.
ruminate|verb|To think deeply about something, often repeatedly.|He ruminated on what he should have said.
plumb|verb|To explore something fully, down to its depths.|The novel plumbs the depths of teenage loneliness.
winnow|verb|To narrow down by removing what is unwanted.|We winnowed fifty ideas down to three.
cull|verb|To select from a group, or remove the weakest.|She culled the best photos for the yearbook.
garner|verb|To gather or earn.|Her speech garnered a standing ovation.
coalesce|verb|To come together into one whole.|Scattered ideas coalesced into a clear plan.
subsume|verb|To include within something larger.|The chess club was subsumed into the games society.
cleave|verb|To split apart, or to cling closely.|The axe cleaved the log in one stroke.
efface|verb|To erase, or to make yourself seem unimportant.|Time had effaced the names on the old stone.
expunge|verb|To erase or remove completely.|The court expunged the charge from his record.
extirpate|verb|To destroy completely, roots and all.|The gardener vowed to extirpate every weed.
raze|verb|To completely destroy a building or town.|They razed the old mall to build apartments.
eviscerate|verb|To gut, or to drain of essential content.|The edits eviscerated the original story.
jettison|verb|To throw away or abandon.|We jettisoned the plan after the storm forecast.
desiccate|verb|To dry out completely.|The sun desiccated the forgotten orange slices.
dissipate|verb|To scatter, fade away, or waste.|The fog dissipated by noon.
languish|verb|To weaken or suffer from neglect.|The bill languished in committee for years.
ossify|verb|To harden into a rigid, unchanging form.|Without new members, the club's traditions ossified.
fritter|verb|To waste time or money bit by bit.|I frittered away Saturday watching clips.
gallivant|verb|To wander from place to place for fun.|They gallivanted around the city all summer.
perambulate|verb|To walk around or through a place.|We perambulated the campus during the tour.
lollygag|verb|To waste time by dawdling.|Stop lollygagging; the bus leaves in five minutes.
skulk|verb|To move around secretly or lurk.|A raccoon skulked behind the dumpster.
ensconce|verb|To settle comfortably or securely.|She ensconced herself in the library's back corner.
sequester|verb|To isolate or set apart.|The jury was sequestered during the trial.
recuse|verb|To step aside from a decision over a conflict of interest.|The judge recused herself because she knew the defendant.
accede|verb|To agree to a request or demand.|The school acceded to student demands for a longer lunch.
capitulate|verb|To stop resisting and give in.|After an hour of begging, Mom capitulated.
acquiesce|verb|To accept something reluctantly without protest.|He acquiesced to the new seating chart.
kowtow|verb|To act with excessive submissiveness.|Refuse to kowtow to the loudest voice in the room.
deign|verb|To do something you consider beneath you.|The cat deigned to sit on my lap for a minute.
abase|verb|To lower in dignity or esteem.|He refused to abase himself by begging for votes.
cosset|verb|To pamper or protect too much.|The star player was cosseted by the coaching staff.
mollycoddle|verb|To overprotect or pamper.|Stop mollycoddling him; he can make his own lunch.
regale|verb|To entertain with stories.|Grandpa regaled us with tales of his band days.
lionize|verb|To treat someone as a celebrity.|The town lionized the teenage inventor.
extol|verb|To praise enthusiastically.|The review extolled the restaurant's dumplings.
hobnob|verb|To mix socially, especially with important people.|At the gala, she hobnobbed with senators.
kibitz|verb|To offer unwanted advice, especially while watching.|Spectators kibitzed over our chess game.
commiserate|verb|To share in someone's sorrow or frustration.|We commiserated over our terrible schedules.
glower|verb|To stare angrily.|She glowered at the person who spoiled the ending.
quail|verb|To shrink back in fear.|The new players quailed under the coach's glare.
caterwaul|verb|To make a shrill, howling noise.|Cats caterwauled outside my window all night.
gesticulate|verb|To make dramatic gestures while speaking.|He gesticulated wildly while describing the fish.
proffer|verb|To hold out or offer for acceptance.|She proffered a cookie as a peace offering.
vouchsafe|verb|To grant or reveal, as if doing a favor.|The coach vouchsafed one word: ‘Better.’
proscribe|verb|To forbid, especially by law.|The rules proscribe phones during exams.
promulgate|verb|To make widely known or officially announce.|The district promulgated a new attendance policy.
engender|verb|To cause or give rise to.|The new policy engendered a lot of debate.
foist|verb|To force something unwanted on someone.|They foisted the cleanup duty on the freshmen.
embroil|verb|To involve deeply in a conflict.|The club got embroiled in a fight over funding.
encroach|verb|To intrude gradually on someone's space or rights.|Homework encroached on every weekend.
waylay|verb|To stop someone unexpectedly, or ambush.|A friend waylaid me on the way to class.
parry|verb|To deflect a blow, question, or criticism.|She parried every question with a joke.
spurn|verb|To reject with contempt.|He spurned every offer of help.
rebuff|verb|To bluntly reject an offer or advance.|The cat rebuffed every attempt at petting.
quash|verb|To suppress or reject firmly.|The principal quashed the rumor about a four-day week.
fetter|verb|To restrict someone's freedom.|Endless rules fettered the creative team.
impute|verb|To attribute a fault or quality to someone.|Don't impute bad motives to an honest mistake.
ascribe|verb|To credit something to a particular cause.|She ascribed her success to stubbornness.
redound|verb|To contribute to someone's credit or discredit.|The win redounds to the coach's credit.
expiate|verb|To make amends for a wrong.|He expiated his rudeness by baking her cookies.
disabuse|verb|To free someone from a mistaken belief.|Let me disabuse you of the idea that finals are easy.
inure|verb|To make someone used to something unpleasant.|Years of early practice inured her to cold mornings.
imbibe|verb|To drink, or to absorb ideas.|She imbibed her grandmother's love of jazz.
eschew|verb|To deliberately avoid.|She eschews social media during finals.
relinquish|verb|To give up control or possession.|He was reluctant to relinquish the window seat.
defenestrate|verb|To throw someone or something out of a window.|In frustration, I nearly defenestrated my phone.
festoon|verb|To decorate with chains of ornaments or garlands.|We festooned the hallway with streamers for homecoming.
grandstand|verb|To act in a showy way to impress onlookers.|The senator grandstanded for the cameras.
bandy|verb|To pass around or mention casually.|The word ‘genius’ gets bandied about too often.
descry|verb|To catch sight of something distant.|From the summit we could descry the ocean.
burgeon|verb|To grow or expand rapidly.|The club's membership burgeoned after the viral video.
vitiate|verb|To spoil or weaken the effect of.|One error vitiated the whole experiment.
sate|verb|To fully satisfy an appetite or desire.|Nothing could sate his curiosity about space.
enervate|verb|To drain someone of energy.|The humid weather enervated the whole team.
bespeak|verb|To be evidence of; to suggest.|His calm answers bespeak years of practice.
belie|verb|To give a false impression of something.|His calm voice belied his nerves.
acumen|noun|Sharpness in judgment, especially in a specific field.|Her business acumen turned a bake sale into a profit machine.
aplomb|noun|Confident poise in a hard situation.|She handled the microphone failure with aplomb.
sangfroid|noun|Coolness and composure under pressure.|The goalie showed remarkable sangfroid during penalties.
gravitas|noun|Serious, dignified weight that earns respect.|Her low voice gave the speech real gravitas.
verve|noun|Energy, enthusiasm, and spirit.|The band played with such verve that people danced.
brio|noun|Vigor and liveliness of style.|She delivered the monologue with brio.
panache|noun|Stylish flair and confidence.|He wears his grandfather's hat with panache.
sprezzatura|noun|Effortless-looking grace that hides real effort.|Her sprezzatura on stage hid months of rehearsal.
gumption|noun|Practical initiative and resourcefulness.|It took gumption to email the author directly.
mettle|noun|The courage to cope well with difficulty.|The final set tested her mettle.
alacrity|noun|Brisk, cheerful eagerness.|He accepted the free tickets with alacrity.
temerity|noun|Reckless boldness.|He had the temerity to ask the principal for a later start time.
effrontery|noun|Shameless boldness or nerve.|She had the effrontery to blame me for her mistake.
chutzpah|noun|Bold, sometimes shameless nerve.|It took chutzpah to ask for an extension on the extension.
schadenfreude|noun|Pleasure taken in someone else's misfortune.|I felt a twinge of schadenfreude when the bully tripped.
ennui|noun|Listless boredom and dissatisfaction.|A deep ennui settled over the class in late May.
malaise|noun|A vague feeling of unease or illness.|A general malaise hung over the town after the factory closed.
anomie|noun|A breakdown of social norms and shared values.|The novel captures the anomie of a lonely suburb.
torpor|noun|A state of sluggish inactivity.|The heat wave left the town in a torpor.
lassitude|noun|Physical or mental weariness.|A strange lassitude kept me in bed all weekend.
akrasia|noun|Acting against your own better judgment.|My akrasia kicks in whenever an essay is due tomorrow.
bonhomie|noun|Cheerful friendliness.|The bonhomie at the reunion was contagious.
largesse|noun|Generosity in giving gifts or money.|Thanks to an alum's largesse, the band got new uniforms.
probity|noun|Strong moral honesty and integrity.|The treasurer's probity was never in question.
rectitude|noun|Morally correct behavior or thinking.|Her rectitude made her the obvious choice for judge.
chicanery|noun|Trickery used to achieve a goal.|The election was marred by chicanery.
subterfuge|noun|Deceit used to achieve a goal.|The surprise party required weeks of subterfuge.
artifice|noun|Clever trickery or skill used to deceive.|The magician's artifice fooled even the skeptics.
legerdemain|noun|Sleight of hand, or deceptive cleverness.|The budget's legerdemain hid the real costs.
machination|noun|A crafty plot or scheme.|The novel follows the machinations of a royal court.
skulduggery|noun|Underhanded, dishonest behavior.|There was some skulduggery in the student council vote.
malfeasance|noun|Wrongdoing, especially by a public official.|The mayor was investigated for malfeasance.
sinecure|noun|A position that pays well but requires little work.|His job at the family firm was a sinecure.
cabal|noun|A secret group plotting together.|A cabal of seniors planned the prank for months.
coterie|noun|A small, exclusive group with shared interests.|She belonged to a coterie of poets who met on Fridays.
cognoscenti|noun|People with expert knowledge in a field.|The cognoscenti say this is the best ramen in town.
demagogue|noun|A leader who wins support by exploiting emotion and prejudice.|The demagogue blamed every problem on outsiders.
toady|noun|Someone who flatters others to gain favor.|The boss surrounded herself with toadies.
gadfly|noun|A person who provokes others through persistent criticism.|The town gadfly speaks at every council meeting.
polymath|noun|A person with expert knowledge in many fields.|The polymath painted, composed, and studied physics.
autodidact|noun|A self-taught person.|An autodidact, she learned to code from library books.
dilettante|noun|Someone who dabbles in an interest without real commitment.|He is a dilettante who quits every hobby after a month.
neophyte|noun|A beginner in a skill or field.|As a chess neophyte, I lost in six moves.
doyen|noun|The most respected or senior person in a field.|She is the doyen of local jazz drummers.
paragon|noun|A perfect example of a quality.|My grandmother was a paragon of patience.
apotheosis|noun|The highest point or perfect example of something.|This dish is the apotheosis of comfort food.
nadir|noun|The lowest point.|The winless season was the nadir of the team's history.
apogee|noun|The highest or farthest point.|The empire reached its apogee under its third king.
quintessence|noun|The purest or most perfect example of something.|That diner is the quintessence of small-town charm.
denouement|noun|The final part of a story, where things are resolved.|The denouement tied up every loose end.
coda|noun|A concluding section or final passage.|The film's coda shows the characters ten years later.
peroration|noun|The closing part of a speech, meant to inspire.|Her peroration brought the audience to its feet.
aporia|noun|An unresolvable contradiction or puzzle.|The debate ended in aporia, with neither side able to win.
sophistry|noun|Clever but deceptive reasoning.|His argument was pure sophistry dressed up as logic.
casuistry|noun|Clever but unsound reasoning, especially about morals.|Calling it ‘borrowing’ was casuistry.
corollary|noun|A natural result or consequence.|Worse grades are a predictable corollary of less sleep.
canard|noun|A false or unfounded rumor.|The canard about free tuition spread quickly.
calumny|noun|A false statement meant to damage someone's reputation.|She sued over the calumny printed in the paper.
obloquy|noun|Strong public criticism or disgrace.|The referee faced obloquy after the controversial call.
opprobrium|noun|Harsh public criticism or scorn.|The brand faced opprobrium after the scandal.
approbation|noun|Approval or praise.|The project earned the approbation of the judges.
encomium|noun|A speech or piece of writing that praises highly.|The retiring teacher received a heartfelt encomium.
diatribe|noun|A bitter verbal attack.|He launched into a diatribe about homework.
screed|noun|A long, angry piece of writing.|She posted a screed about the cafeteria food.
polemic|noun|A strong written or spoken attack on an opinion.|Her essay was a polemic against standardized tests.
invective|noun|Insulting or abusive language.|The comments section filled with invective.
rancor|noun|Bitter, long-lasting resentment.|Years later, there was still rancor over the trade.
animus|noun|Hostility or ill feeling.|There is no personal animus behind my criticism.
umbrage|noun|Offense or annoyance.|She took umbrage at being called ‘cute.’
pique|noun|Irritation from wounded pride.|In a fit of pique, he left the group chat.
chagrin|noun|Annoyance or embarrassment at a failure.|To my chagrin, I tripped on the stage stairs.
contretemps|noun|A minor dispute or unlucky mishap.|A contretemps over seating delayed the dinner.
fracas|noun|A noisy disturbance or quarrel.|A fracas broke out in the parking lot after the game.
imbroglio|noun|A complicated, embarrassing situation.|The yearbook imbroglio involved three misspelled names.
brouhaha|noun|A noisy fuss over something minor.|The brouhaha over the mascot redesign lasted weeks.
kerfuffle|noun|A commotion, usually over a disagreement.|There was a kerfuffle over who would sit in front.
maelstrom|noun|A situation of violent turmoil.|The newsroom was a maelstrom on election night.
morass|noun|A complicated situation that is hard to escape.|The project sank into a morass of paperwork.
miasma|noun|An unpleasant, heavy atmosphere or smell.|A miasma of gym socks hung over the locker room.
pall|noun|A gloomy, heavy atmosphere.|The news cast a pall over the celebration.
penumbra|noun|A partly shaded outer area, or a fuzzy border zone.|The question sits in a legal penumbra.
palimpsest|noun|Something reused but still showing traces of its past.|The old city is a palimpsest of different eras.
pastiche|noun|A work that imitates or mixes other styles.|The movie is a pastiche of 1980s horror films.
bricolage|noun|Something made from whatever materials are at hand.|Her costume was a bricolage of thrift store finds.
farrago|noun|A confused mixture.|The plan was a farrago of half-baked ideas.
surfeit|noun|An excessive amount of something.|A surfeit of candy left us sick after Halloween.
dearth|noun|A lack or scarcity.|There is a dearth of good parking near the school.
paucity|noun|The presence of something in only small amounts.|The paucity of evidence weakened the case.
modicum|noun|A small quantity.|Show a modicum of respect for the substitute.
penchant|noun|A strong liking or habit.|She has a penchant for dramatic entrances.
predilection|noun|A preference or special liking.|He has a predilection for spicy food.
proclivity|noun|A natural tendency toward something.|My dog has a proclivity for stealing socks.
foible|noun|A minor weakness or quirk.|His habit of humming is a lovable foible.
peccadillo|noun|A small, relatively harmless sin.|Eating dessert first is a forgivable peccadillo.
neologism|noun|A newly coined word or expression.|‘Doomscrolling’ was a neologism not long ago.
eggcorn|noun|A misheard phrase that still sounds like it makes sense.|Writing ‘for all intensive purposes’ is a classic eggcorn.
dysphemism|noun|A harsh term used in place of a neutral one.|‘Mystery meat’ is a dysphemism for cafeteria lunch.
litotes|noun|Understatement made by denying the opposite.|Saying a test was ‘not easy’ is litotes for ‘brutal.’
synecdoche|noun|A figure of speech using a part to stand for the whole.|Calling a car your ‘wheels’ is synecdoche.
verisimilitude|noun|The appearance of being true or real.|The historical details give the novel verisimilitude.
bathos|noun|A sudden, absurd drop from the serious to the trivial.|The epic speech ended in bathos when he sneezed.
leitmotif|noun|A recurring theme or musical phrase.|Rain is the novel's leitmotif.
oeuvre|noun|The complete body of an artist's work.|Her oeuvre spans painting, film, and poetry.
juvenilia|noun|Works produced by an artist in youth.|My middle school poems are juvenilia best left unread.
marginalia|noun|Notes written in the margins of a book.|The used textbook was full of funny marginalia.
ephemera|noun|Things meant to be used or valued only briefly.|The museum collects concert tickets and other ephemera.
reverie|noun|A pleasant daydream.|The bell snapped me out of my reverie.
petrichor|noun|The earthy smell after rain falls on dry ground.|The petrichor after the storm smelled like summer camp.
susurrus|noun|A soft whispering or rustling sound.|The susurrus of the crowd faded as the lights dimmed.
gloaming|noun|The soft half-light of dusk.|We walked home in the gloaming.
frisson|noun|A sudden thrill of excitement or fear.|A frisson ran through the crowd as the lights went out.
nostrum|noun|A favorite but questionable remedy or solution.|Every candidate had a nostrum for the economy.
desideratum|noun|Something needed or wanted.|A quiet place to study is my chief desideratum.
wherewithal|noun|The money or resources needed for something.|We lacked the wherewithal to rent the venue.
emolument|noun|A salary, fee, or profit from employment.|The internship offered no emolument except experience.
perquisite|noun|A special benefit beyond regular pay; a perk.|A free lunch was the job's best perquisite.
lagniappe|noun|A small extra gift given with a purchase.|The baker added a cookie as lagniappe.
boondoggle|noun|A wasteful project of little value.|The new stadium was a costly boondoggle.
tchotchke|noun|A small, cheap trinket or knickknack.|Her desk is covered in tchotchkes from every trip.
detritus|noun|Debris or leftover waste.|The detritus of the party covered the lawn.
flotsam|noun|Floating wreckage, or odds and ends.|Flotsam washed up on the beach after the storm.
dross|noun|Something worthless; rubbish.|Sift through the dross to find the good videos.
minutiae|noun|Small, precise, or trivial details.|We got lost in the minutiae of the dress code.
fiefdom|noun|An area under someone's personal control.|The coach runs the gym like his own fiefdom.
bailiwick|noun|A person's area of skill, interest, or authority.|Spreadsheets are not really my bailiwick.
purview|noun|The range of someone's authority or concern.|Parking is outside the student council's purview.
ambit|noun|The scope or extent of something.|The investigation widened its ambit.
gamut|noun|The complete range of something.|Her emotions ran the gamut from joy to despair.
panoply|noun|A complete or impressive collection.|The kitchen holds a panoply of gadgets.
interregnum|noun|A gap between one ruler or regime and the next.|The club drifted during the interregnum between presidents.
lacuna|noun|A gap or missing part.|The diary has a lacuna covering the war years.
caesura|noun|A break or pause, especially in a line of poetry.|Read the line aloud and pause at the caesura.
reprieve|noun|A temporary relief from something unpleasant.|The snow day gave us a reprieve from the test.
sojourn|noun|A temporary stay.|After a brief sojourn in Paris, she returned home.
peregrination|noun|A long journey, especially on foot.|Our peregrinations through the city lasted all day.
denizen|noun|An inhabitant or regular of a place.|The denizens of the library know every quiet corner.
flaneur|noun|Someone who strolls about to observe city life.|The flaneur wandered the streets watching people.
raconteur|noun|A skilled storyteller.|My uncle, a natural raconteur, held the whole table.
interlocutor|noun|A person you are in conversation with.|My interlocutor kept checking his phone.
doppelganger|noun|A double or look-alike of a living person.|I met my doppelganger at the mall.
cynosure|noun|The center of attention or admiration.|The new puppy was the cynosure of the party.
lodestar|noun|A guiding principle or source of direction.|Curiosity has always been her lodestar.
apostate|noun|A person who abandons a belief or cause.|He's an apostate who switched football teams.
curmudgeon|noun|A bad-tempered, grumpy person, often older.|The curmudgeon next door hates leaf blowers.
misanthrope|noun|A person who dislikes humankind.|Even a misanthrope would love this puppy.
troglodyte|noun|A cave dweller, or someone stubbornly out of date.|My dad is a troglodyte who still prints out maps.
rapscallion|noun|A mischievous person, often playful.|The little rapscallion hid my keys again.
scofflaw|noun|Someone who flouts the law, especially minor rules.|The scofflaw parked in the fire lane again.
miscreant|noun|A person who has behaved badly or illegally.|The miscreants who egged the house were caught on camera.
reprobate|noun|An unprincipled person.|The novel's charming reprobate is the best character.
mountebank|noun|A swindler who cons people with tricks.|The mountebank sold miracle cures from his van.
shill|noun|Someone who poses as a customer to lure others.|The ‘satisfied customer’ was a shill.
interloper|noun|Someone who intrudes where they do not belong.|The interloper crashed our study group.
arriviste|noun|An ambitious newcomer, often a social climber.|The arriviste tried too hard to impress.
poseur|noun|Someone who pretends to be what they are not.|He's a poseur who only reads book summaries.
popinjay|noun|A vain, talkative person.|The popinjay spent the party admiring himself.
gourmand|noun|A person who loves food, sometimes to excess.|The gourmand ordered every dessert on the menu.
logophile|noun|A lover of words.|A true logophile, she reads the dictionary for fun.
kleptocracy|noun|A government whose leaders steal from the nation.|The kleptocracy drained the country's wealth.
gerontocracy|noun|Rule by a group of elderly people.|Critics call the senate a gerontocracy.
anagnorisis|noun|The moment a character discovers the truth.|The anagnorisis comes when she reads the letter.
hamartia|noun|A fatal flaw leading to a hero's downfall.|Pride is the hero's hamartia.
apophenia|noun|The tendency to see patterns in random things.|Conspiracy theories thrive on apophenia.
pareidolia|noun|Seeing faces or shapes in random objects.|Pareidolia makes the outlet look like a surprised face.
gestalt|noun|A whole that is more than the sum of its parts.|The gestalt of the album matters more than any single song.
simulacrum|noun|An imitation or representation, often a poor one.|The theme park is a simulacrum of a medieval village.
bellwether|noun|Something that signals future trends.|The state is a bellwether for national elections.
confluence|noun|A coming together of people, ideas, or things.|The festival was a confluence of music and food.
cachet|noun|Prestige or distinction.|The brand has a certain cachet among skaters.
snollygoster|noun|A clever, unscrupulous person, especially in politics.|The snollygoster promised every voter something different.
quidnunc|noun|A nosy person who always wants the latest gossip.|The class quidnunc knew about the breakup before we did.
kakistocracy|noun|Government by the least qualified or worst people.|By March, the student council felt like a kakistocracy.
collywobbles|noun|A nervous, fluttery feeling in the stomach.|I always get the collywobbles before a big recital.
`;

// Words from the first bank that proved familiar to well-read adults: as common
// as ‘denizen’ or more in English text. They leave the bank from the second
// edition on, but stay in the first bank above for history.
const retired = new Set(`
acumen animus arcane ascetic ascribe attenuate auspicious beleaguered bespoke burgeon cabal
capitulate capricious chagrin circumvent cogent collude conciliatory confluence construe corollary
corroborate craven cull dearth delineate denizen detritus disingenuous disparage dissipate doughty
dragoon elucidate embolden embroil encroach endemic errant erstwhile erudite gamut garner grandstand
hamstring immutable incandescent incisive indomitable intractable lurid machination malaise mettle
nadir nascent nettle obtuse oeuvre onerous opine pall paragon parry penchant pique placate plumb
posit preclude prodigal promulgate purview quail quash rail raze rebuff refractory relinquish
reprieve rescind rife salient sanguine seminal shill sojourn spurious stalwart substantiate sully
supersede supplant tacit tenuous usurp verve vexed vindicate
`.trim().split(/\s+/));

// Added with the second bank: rarer words, nearly all far below ‘denizen’ in use.
const addedRows = `
rebarbative|adj.|Unattractive and off-putting; inviting objection.|His rebarbative tone made everyone stop listening.
sciolistic|adj.|Showing shallow knowledge passed off as expertise.|His sciolistic take on economics fell apart under one question.
tenebrous|adj.|Dark, shadowy, or obscure.|We felt our way down the tenebrous hallway after the power cut.
fuliginous|adj.|Sooty or smoky; dusky and dark.|The old chimney left fuliginous streaks across the ceiling.
caliginous|adj.|Misty, dim, and hard to see through.|The caliginous morning hid the bridge until we reached it.
nacreous|adj.|Having the soft, rainbow sheen of mother-of-pearl.|The inside of the shell had a nacreous glow.
argute|adj.|Sharp and shrewd; also, shrill in sound.|Her argute reading of the contract found the catch.
frowsty|adj.|Stale, stuffy, and warm, like a shut-up room.|We opened every window in the frowsty cabin.
frowzy|adj.|Scruffy, unkempt, and neglected-looking.|He showed up in a frowzy sweater he had slept in.
feculent|adj.|Foul with filth or waste.|The feculent pond behind the farm was off limits.
mephitic|adj.|Foul-smelling and noxious.|A mephitic smell rose from the forgotten lunchbox.
atrabilious|adj.|Gloomy and bad-tempered.|Monday mornings put my atrabilious uncle in a mood.
matutinal|adj.|Of or happening in the early morning.|Her matutinal run starts before the buses do.
vespertine|adj.|Of the evening; active or blooming at dusk.|The vespertine flowers opened just as we lit the grill.
antelucan|adj.|Happening before dawn.|We set off on an antelucan hike to catch the sunrise.
hiemal|adj.|Of or relating to winter.|The hiemal wind found every gap in the window frame.
brumal|adj.|Wintry; belonging to the depths of winter.|The lake had a brumal stillness by late December.
estival|adj.|Of or belonging to summer.|The estival heat melted our chalk drawings.
eximious|adj.|Exceptional; standing out above the rest.|Her eximious violin solo earned a standing ovation.
nitid|adj.|Bright, glossy, and shining.|The nitid hood of the new car reflected the whole street.
gelid|adj.|Icy cold; frozen to the touch.|I gasped when I stepped into the gelid lake.
algid|adj.|Cold; chilled to the point of discomfort.|The algid locker room made us change fast.
fulvous|adj.|Tawny; a dull brownish yellow.|A fulvous fox crossed the road at dusk.
glaucous|adj.|Pale gray-green or blue-green, often with a dusty bloom.|The glaucous leaves of the succulents looked powdered.
rutilant|adj.|Glowing or shining with a reddish light.|The rutilant embers kept us warm past midnight.
recrudescent|adj.|Breaking out again after a quiet spell.|The recrudescent rumor spread through school again.
crapulous|adj.|Sick or sluggish from too much food or drink.|After three plates of turkey, Dad sat crapulous on the couch.
bibulous|adj.|Fond of drinking, especially alcohol.|The bibulous uncle made one toast too many.
edacious|adj.|Greedy and devouring, especially of food.|The edacious puppy ate my homework and the folder.
esurient|adj.|Hungry or greedy.|The esurient team swarmed the pizza boxes after practice.
postprandial|adj.|Happening just after a meal.|Grandpa takes a postprandial nap every Sunday.
anserine|adj.|Goose-like; foolish or silly.|His anserine honk of a laugh echoed through the theater.
vulpine|adj.|Fox-like, especially in craftiness.|The villain flashed a vulpine grin.
hircine|adj.|Goat-like, especially in smell.|The gym bag had developed a hircine odor.
ophidian|adj.|Snake-like in form or manner.|He slid through the crowd with ophidian ease.
corvine|adj.|Of or like crows and ravens.|Her corvine eye spotted every shiny thing on the desk.
fissiparous|adj.|Inclined to split into factions.|The fissiparous club split into three groups in a year.
nubilous|adj.|Cloudy, foggy, or vague.|His nubilous plan had no dates and no budget.
impavid|adj.|Fearless; not easily alarmed.|The impavid goalie dove at the striker's feet.
pervicacious|adj.|Extremely stubborn.|My pervicacious brother refused to admit he was lost.
refulgent|adj.|Shining brightly; radiant.|The refulgent trophy sat in the front case.
rubicund|adj.|Ruddy and red-faced, as from health or cold.|The rubicund skier came in grinning from the slopes.
logorrheic|adj.|Talking compulsively and at great length.|My logorrheic seatmate narrated the entire flight.
macilent|adj.|Lean, thin, and wasted-looking.|The macilent stray filled out after a month of meals.
gracile|adj.|Slender and graceful.|The gracile dancer seemed to weigh nothing.
hispid|adj.|Covered in stiff, bristly hairs.|The hispid stem scratched my hand.
gibbous|adj.|Of the moon, more than half lit but not yet full.|A gibbous moon lit the field for the night game.
bosky|adj.|Wooded or covered with bushes.|We picnicked in a bosky corner of the park.
umbrageous|adj.|Shady; also, quick to take offense.|The umbrageous oak kept the bench cool all day.
apodictic|adj.|Clearly true and beyond dispute.|She stated her answer with apodictic certainty.
ludic|adj.|Playful in a spontaneous, aimless way.|The museum had a ludic room where kids could build anything.
eleemosynary|adj.|Relating to charity or giving to the poor.|The bake sale had an eleemosynary purpose this year.
supererogatory|adj.|Going beyond what duty requires.|Her supererogatory footnotes impressed the teacher.
nescient|adj.|Lacking knowledge; unaware.|I was nescient of the rule until the referee blew the whistle.
pococurante|adj.|Indifferent and unconcerned; caring little.|His pococurante shrug annoyed the whole team.
eupeptic|adj.|Cheerful and optimistic; also, digesting well.|Her eupeptic mood lasted through a rainy Monday.
frangible|adj.|Fragile; easily broken.|Pack the frangible ornaments in the top box.
velutinous|adj.|Velvety, covered in fine soft hairs.|The velutinous leaves felt like a puppy's ear.
aureate|adj.|Golden; also, showily elaborate in style.|His aureate prose needed fewer adjectives.
canescent|adj.|Grayish white; hoary.|The canescent leaves of the sage shone in the sun.
puissant|adj.|Powerful and influential.|The puissant booster club funded the new field.
deliquescent|adj.|Melting away or dissolving into liquid.|The deliquescent ice cream ran down my wrist.
tumid|adj.|Swollen; also, pompous in language.|His ankle was tumid after the fall.
flocculent|adj.|Woolly and fluffy, like loose tufts.|Flocculent clouds drifted over the lake.
gimcrack|adj.|Showy but flimsy and cheap.|The gimcrack trophy lost its handle by Friday.
clinquant|adj.|Glittering with tinsel or false gold.|The clinquant costume shed sequins all over the stage.
nidorous|adj.|Smelling of cooking meat or burnt fat.|The nidorous smoke drifted over from the barbecue.
olid|adj.|Foul-smelling; rank.|Something olid lurked at the back of the fridge.
esculent|adj.|Fit to be eaten; edible.|The guide pointed out which mushrooms were esculent.
pleonastic|adj.|Using more words than needed, like ‘free gift’.|‘Past history’ is a pleonastic phrase.
anfractuous|adj.|Full of twists, turns, and winding paths.|The anfractuous trail doubled back on itself twice.
flexuous|adj.|Full of bends and curves; winding.|A flexuous creek wound through the meadow.
marmoreal|adj.|Cold, smooth, or white like marble.|She kept a marmoreal calm during the interview.
insalubrious|adj.|Unhealthy, or seedy and unpleasant.|The insalubrious motel had a broken ice machine.
tetchy|adj.|Irritable and easily annoyed.|He gets tetchy when he skips breakfast.
liverish|adj.|Slightly unwell; also, grumpy and irritable.|I felt liverish after the third slice of cake.
donnish|adj.|Bookish and pedantic, like an old professor.|His donnish footnotes ran longer than the essay.
crabbed|adj.|Cramped and hard to read; also, cranky.|Her crabbed handwriting needed a magnifying glass.
dreich|adj.|Dreary and bleak, especially of weather.|It was a dreich, drizzly day for the parade.
lenitive|adj.|Soothing; easing pain or distress.|The aloe had a lenitive effect on my sunburn.
minatory|adj.|Threatening; expressing menace.|The coach gave us a minatory look during warmups.
vatic|adj.|Prophetic, like a seer.|Her vatic warning about the weather came true.
fatidic|adj.|Prophetic; foretelling fate.|The fortune cookie felt oddly fatidic this time.
bathetic|adj.|Sliding from the lofty into the ridiculous.|The epic poem ended with a bathetic line about socks.
etiolated|adj.|Pale and weakened from lack of light or vigor.|The etiolated basil on the windowsill needed sun.
cadaverous|adj.|Gaunt and pale, like a corpse.|After finals week he looked cadaverous.
ferruginous|adj.|Rust-colored; containing iron.|The ferruginous cliffs glowed at sunset.
smaragdine|adj.|Emerald green in color.|The lake turned smaragdine in the afternoon light.
eburnean|adj.|Like ivory in color or texture.|The old piano keys had an eburnean yellow.
niveous|adj.|Snowy, or as white as snow.|The niveous tablecloth did not survive the spaghetti.
prelapsarian|adj.|Innocent and carefree, as before a fall from grace.|We remember summer camp as a prelapsarian time.
quondam|adj.|Former; that once was.|My quondam best friend now sits across the room.
whilom|adj.|Former; of an earlier time.|The whilom bakery is now a phone store.
hebdomadal|adj.|Weekly; happening every seven days.|Our hebdomadal quiz falls on Thursday.
gormless|adj.|Lacking sense; dim and clueless.|I gave a gormless wave to someone waving behind me.
addlepated|adj.|Confused and muddled in the head.|I was addlepated after three hours of chemistry.
hebetudinous|adj.|Dull and sluggish of mind.|The hebetudinous meeting dragged past five.
incondite|adj.|Badly put together; crude in construction.|His incondite essay jumped from point to point.
macaronic|adj.|Mixing two or more languages, often comically.|Her macaronic toast switched between French and English.
demotic|adj.|Of ordinary people, especially everyday speech.|The poet wrote in a demotic voice full of slang.
hieratic|adj.|Priestly; highly formal and stylized.|The usher's hieratic bow felt over the top.
uxorious|adj.|Excessively fond of or devoted to one's wife.|The uxorious groom agreed to every single request.
materteral|adj.|Like an aunt, kindly in an aunt's way.|She gave the new hire some materteral advice.
sororal|adj.|Sisterly; of or like a sister.|They shared a sororal bond despite the age gap.
connubial|adj.|Relating to marriage.|Connubial life began with a fight over the thermostat.
ambisinister|adj.|Clumsy with both hands.|An ambisinister cook should not juggle knives.
sinistral|adj.|Left-handed, or on the left side.|The sinistral pitcher baffled every batter.
mumchance|adj.|Silent and tongue-tied.|He stood mumchance when she said yes.
inutile|adj.|Useless; of no practical value.|The broken stapler sat inutile on the desk.
concinnous|adj.|Harmoniously and elegantly arranged.|Her concinnous slides made the talk easy to follow.
fustian|adj.|Pompous and inflated in language.|The fustian speech used ‘whereupon’ six times.
saponaceous|adj.|Soapy; also, slippery and evasive.|The saponaceous answer slid right around the question.
oleaginous|adj.|Oily; also, smarmy and too flattering.|The oleaginous salesman called everyone ‘my friend.’
fubsy|adj.|Short and stout; squat.|The fubsy armchair took up half the room.
pawky|adj.|Dryly humorous in a shrewd, sly way.|His pawky remarks kept the meeting light.
raddled|adj.|Worn out and haggard; muddled.|After the red-eye flight, he looked raddled.
tatterdemalion|adj.|Ragged and tattered.|The tatterdemalion scarecrow lost its hat in the storm.
draggled|adj.|Wet and dirty, as if hauled through mud.|The dog came back draggled and proud.
strepitous|adj.|Loud, noisy, and clamorous.|The strepitous cafeteria made phone calls impossible.
rackety|adj.|Noisy and boisterous; also, rickety.|The rackety old bus rattled every window.
piffling|adj.|Trivial, small, and unimportant.|They fought over a piffling two points.
cockamamie|adj.|Ridiculous and implausible.|He had a cockamamie plan to sell ice in January.
jackleg|adj.|Unskilled, amateurish, or makeshift.|A jackleg repair kept the bike going for a week.
tinpot|adj.|Petty and self-important, of little real worth.|The tinpot hall monitor wrote us all up.
cattywampus|adj.|Askew; not lined up properly.|The picture hung cattywampus after the door slammed.
farouche|adj.|Shy, sullen, or unsociable, as if wild.|The farouche new cat hid under the bed all week.
rumbustious|adj.|Boisterous and unruly.|The rumbustious crowd stormed the court after the win.
lexiphanic|adj.|Using pretentious, showy words.|His lexiphanic essay needed a glossary.
magniloquent|adj.|Lofty and boastful in speech.|The magniloquent mayor promised a golden age of potholes.
declamatory|adj.|Loud and rhetorical, as if addressing a crowd.|Her declamatory toast silenced the room.
circumlocutory|adj.|Talking around the point instead of to it.|His circumlocutory reply never actually said no.
ambagious|adj.|Roundabout and indirect.|The ambagious directions took us past one gas station twice.
mantic|adj.|Relating to divination or prophecy.|The tarot reader had a mantic flair.
comminatory|adj.|Threatening punishment or vengeance.|The comminatory notice warned of towing at noon.
malefic|adj.|Causing harm or evil.|The old house seemed to have a malefic air.
acidulous|adj.|Slightly sour; also, sharp and biting in manner.|Her acidulous review stung the director.
acescent|adj.|Turning sour, or slightly sour.|The acescent milk smelled faintly off.
querulous|adj.|Complaining in a petulant, whining way.|The querulous passenger rang the call button every hour.
pettish|adj.|Petulant and sulky.|He gave a pettish shrug when she won.
shirty|adj.|Bad-tempered and annoyed.|She got shirty when I asked for my charger back.
stroppy|adj.|Bad-tempered and difficult to deal with.|The stroppy toddler refused every shoe.
snappish|adj.|Irritable and quick to snap at people.|Lack of sleep made her snappish.
waspish|adj.|Sharply irritable and spiteful.|His waspish comments stung more than he meant.
narky|adj.|Irritable and sarcastic.|He gets narky when someone takes his seat.
noisome|adj.|Offensive to the senses; also, harmful.|A noisome smell came from the drain.
dyspeptic|adj.|Irritable and sour, as if from indigestion.|The dyspeptic critic hated every movie that year.
chthonic|adj.|Of or relating to the underworld.|The cave tour had a chthonic chill.
sere|adj.|Dry and withered.|The sere lawn crunched underfoot in August.
piacular|adj.|Making amends; also, calling for atonement.|She brought a piacular plate of cookies after the fight.
lumpen|adj.|Boorish, stupid, or crude.|The lumpen sequel had none of the original's wit.
aulic|adj.|Relating to a royal court.|The office had an aulic pecking order of who sat where.
ensorcelled|adj.|Enchanted, as if by a spell.|The ensorcelled audience did not move until the last note.
tutelary|adj.|Serving as a guardian or protector.|The old oak was the tutelary spirit of our street.
velleity|noun|A mere wish too weak to act on.|My plan to learn Latin remained a velleity.
quiddity|noun|The essence of a thing; also, a petty quibble.|The chef tried to capture the quiddity of a tomato.
haecceity|noun|The quality that makes a thing uniquely itself.|Each snowflake has its own haecceity.
sciolist|noun|A person who pretends to more knowledge than they have.|The sciolist in our group quoted forums as gospel.
mumpsimus|noun|A stubborn habit or belief kept after it is shown wrong.|Writing ‘alot’ is his mumpsimus, despite every correction.
logomachy|noun|A dispute about words or their meanings.|The debate turned into logomachy over what ‘fair’ means.
apricity|noun|The warmth of the sun on a cold winter day.|We ate lunch outside to soak up the apricity.
desuetude|noun|A state of disuse.|The old tennis court has fallen into desuetude.
cunctation|noun|Delay; the habit of putting things off.|My cunctation left one night for a two-week project.
fanfaronade|noun|Loud, swaggering boasting.|His fanfaronade before the race made losing worse.
furbelow|noun|A showy ruffle or piece of trim.|Her prom dress had a furbelow at every hem.
gewgaw|noun|A showy trinket of little value.|The gift shop sold gewgaws at museum prices.
bibelot|noun|A small decorative ornament or curio.|Her shelf was crowded with bibelots from every trip.
folderol|noun|Foolish nonsense; showy fuss over nothing.|Skip the folderol and tell me who won.
flapdoodle|noun|Nonsense; foolish talk.|The ad was pure flapdoodle about miracle shampoo.
codswallop|noun|Nonsense; utter rubbish.|He said the dog ate his essay, which was codswallop.
bafflegab|noun|Confusing, wordy jargon.|The terms of service were ten pages of bafflegab.
megrim|noun|Low spirits; also, a sudden whim.|A rainy week left her in a megrim.
mulligrubs|noun|A fit of gloom or sulky bad temper.|He had the mulligrubs after the team lost.
fantods|noun|A state of nervous, fidgety irritation.|Waiting for results gave me the fantods.
conniption|noun|A fit of rage or hysteria.|Mom had a conniption over the muddy carpet.
snit|noun|A fit of irritation or sulking.|He went into a snit over the seating chart.
persiflage|noun|Light, teasing banter.|The hosts traded persiflage between acts.
badinage|noun|Playful, witty back-and-forth.|Their badinage made the long drive fly by.
raillery|noun|Good-humored teasing.|The team's raillery never crossed into cruelty.
gallimaufry|noun|A confused jumble or medley.|The yard sale was a gallimaufry of lamps and skates.
salmagundi|noun|A mixed dish of many things; any odd mixture.|Her playlist was a salmagundi of jazz and metal.
congeries|noun|A disorderly collection or heap.|A congeries of cables sat behind the TV.
contumely|noun|Insolent, scornful abuse.|The referee endured contumely from both benches.
acedia|noun|Spiritual or mental apathy; listless boredom.|Acedia set in by the third week of summer.
anhedonia|noun|The inability to feel pleasure.|His anhedonia made even pizza night feel flat.
weltschmerz|noun|Sad weariness with the world as it is.|Reading the news gave her a dose of weltschmerz.
hiraeth|noun|A longing for a home you cannot return to.|Old photos of the farm filled him with hiraeth.
saudade|noun|A deep, wistful longing for something absent.|The song carried a saudade for summers past.
fernweh|noun|An ache to travel to faraway places.|Fernweh hit hard every time a plane passed over.
tsundoku|noun|Buying books and letting them pile up unread.|My nightstand is a monument to tsundoku.
zeugma|noun|One word applied to two others in different senses.|‘She lost her keys and her temper’ is a zeugma.
chiasmus|noun|A reversal of words across two parallel phrases.|‘Fail to plan, plan to fail’ is a neat chiasmus.
anadiplosis|noun|Starting a clause with the last word of the one before.|‘Fear leads to anger; anger leads to hate’ uses anadiplosis.
aposiopesis|noun|Breaking off a sentence before finishing it.|‘Do that again and I'll...’ is classic aposiopesis.
tmesis|noun|Splitting a word by inserting another inside it.|‘Abso-flipping-lutely’ is a playful tmesis.
hendiadys|noun|Expressing one idea with two words joined by ‘and’.|‘Nice and warm’ is a familiar hendiadys.
metonymy|noun|Naming a thing by something closely tied to it.|Calling a monarch ‘the crown’ is metonymy.
catachresis|noun|Misuse of a word, or a strained figure of speech.|Using ‘literally’ for emphasis is a common catachresis.
prosopopoeia|noun|Speaking as an absent or imaginary person; personification.|The essay used prosopopoeia, letting the river speak.
ekphrasis|noun|A vivid written description of a work of art.|Her poem was an ekphrasis of a painting of a diner.
apophasis|noun|Raising a subject by saying you won't mention it.|‘I won't even bring up your grades’ is apophasis.
paraprosdokian|noun|A sentence whose surprise ending reframes its start.|His joke ended in a paraprosdokian that made us groan.
borborygmus|noun|A rumbling or gurgling sound in the stomach.|A loud borborygmus broke the silence during the exam.
singultus|noun|The medical term for hiccups.|A fit of singultus interrupted his speech.
sternutation|noun|The act of sneezing.|Pollen season brings a chorus of sternutation.
oscitation|noun|Yawning; also, drowsy inattention.|The lecture set off a wave of oscitation.
horripilation|noun|Goose bumps; hair standing on end from cold or fear.|The final chord gave me horripilation.
formication|noun|A feeling of insects crawling on the skin.|Talking about lice gave everyone formication.
pandiculation|noun|Stretching and yawning, as on waking.|The cat's morning pandiculation took a full minute.
lalochezia|noun|Swearing to relieve stress or pain.|Stubbing his toe set off a burst of lalochezia.
phosphene|noun|Light you see when you rub your closed eyes.|Rubbing my eyes made purple phosphenes swirl.
psithurism|noun|The sound of wind rustling through trees.|We fell asleep to the psithurism of the pines.
crepuscule|noun|Twilight; the dim light of dusk.|Bats came out in the crepuscule.
sillage|noun|The trail of scent left behind by a perfume.|Her sillage lingered in the hall after she left.
haar|noun|A cold sea fog rolling in off the water.|A haar swallowed the beach by noon.
virga|noun|Rain that evaporates before it reaches the ground.|Streaks of virga hung under the clouds.
graupel|noun|Soft, small pellets of snow and ice.|Graupel bounced off the windshield.
williwaw|noun|A sudden, violent gust of cold wind.|A williwaw nearly flipped our canoe.
haboob|noun|A violent dust storm in desert regions.|The haboob turned the afternoon orange.
mizzle|noun|A fine, misty rain.|The mizzle was too light for an umbrella.
hebetude|noun|Mental dullness or lethargy.|A heavy lunch brought on an afternoon of hebetude.
slugabed|noun|A lazy person who stays in bed late.|My brother is a slugabed until noon on weekends.
lickspittle|noun|A fawning, servile flatterer.|The manager surrounded himself with lickspittles.
pettifogger|noun|A person who quibbles over petty details.|The pettifogger argued about the font size.
quacksalver|noun|A charlatan who sells fake cures.|The quacksalver online sold ‘brain-boosting’ water.
lummox|noun|A big, clumsy, slow-witted person.|The friendly lummox tripped over his own backpack.
mooncalf|noun|A dreamy, absent-minded fool.|He drifted around the hall like a lovesick mooncalf.
jackanapes|noun|A cheeky, impertinent person.|Some jackanapes stuck gum on the trophy.
coxcomb|noun|A vain, showy person fixated on looks.|The coxcomb checked his hair in every window.
poetaster|noun|A writer of bad or trivial verse.|The poetaster rhymed ‘love’ with ‘glove’ again.
criticaster|noun|A petty or incompetent critic.|An online criticaster gave the film one star unseen.
opsimath|noun|A person who begins learning late in life.|Grandma became an opsimath, starting piano at seventy.
philomath|noun|A lover of learning.|The philomath read encyclopedias for fun.
bibliotaph|noun|A person who hoards books and hides them away.|The bibliotaph locked his first editions in a closet.
abecedarian|noun|A beginner learning the basics.|As an abecedarian guitarist, I know three chords.
amanuensis|noun|A person who takes dictation or copies manuscripts.|The author's amanuensis typed every word he spoke.
factotum|noun|An employee who does all kinds of work.|The office factotum fixed the printer and ordered lunch.
dragoman|noun|An interpreter and guide.|Our dragoman translated the market haggling.
boulevardier|noun|A stylish man-about-town.|He played the boulevardier with a scarf and a cane.
noctambulist|noun|A sleepwalker, or one who roams at night.|The noctambulist woke up in the kitchen.
hierophant|noun|An interpreter of sacred or arcane mysteries.|The hierophant of the coding club explained the bug.
thaumaturge|noun|A worker of wonders or miracles.|The mechanic was a thaumaturge with old engines.
haruspex|noun|A diviner who read omens in animal entrails.|No haruspex could predict this year's playoffs.
epigone|noun|An inferior imitator of a creative master.|The band's epigones copied the sound but not the spark.
satrap|noun|A subordinate ruler or petty official.|The hall monitor ruled like a satrap.
panjandrum|noun|A self-important person in authority.|The panjandrum of the HOA fined us for blue shutters.
picaroon|noun|A rogue, pirate, or adventurer.|The picaroon in the novel steals a ship in chapter two.
scapegrace|noun|A mischievous or wayward person; a rascal.|The scapegrace cousin set off fireworks at the wedding.
wastrel|noun|A wasteful, good-for-nothing person.|The wastrel spent his birthday money on day one.
muckworm|noun|A miser; one who grubs for money.|The muckworm would not tip the waiter.
pinchpenny|noun|A stingy person who hoards every cent.|The pinchpenny reused tea bags four times.
wiseacre|noun|An annoying know-it-all.|The wiseacre in back corrected the substitute.
smellfungus|noun|A chronic grumbler who finds fault everywhere.|The smellfungus hated the beach, the food, and the sun.
crapehanger|noun|A gloomy pessimist who spoils the fun.|Don't be a crapehanger; the forecast says sunny.
gongoozler|noun|An idler who watches the activity on canals.|A row of gongoozlers watched the boat squeeze through the lock.
ninnyhammer|noun|A fool; a simpleton.|The ninnyhammer locked his keys in the car again.
hobbledehoy|noun|An awkward, gangly young person.|He was a hobbledehoy of fourteen, all elbows.
schlemiel|noun|A clumsy, unlucky bungler.|The schlemiel spilled soup on the one guest in white.
schlimazel|noun|A chronically unlucky person.|The schlimazel always gets the wobbly table.
nebbish|noun|A timid, meek, ineffectual person.|The nebbish in the movie finally stands up to his boss.
luftmensch|noun|An impractical dreamer with no steady income.|The luftmensch had a hundred ideas and no job.
macher|noun|A big shot; someone who gets things done.|She is the macher behind the school fundraiser.
shpilkes|noun|Nervous impatience; ants in the pants.|The kids had shpilkes waiting for the field trip bus.
tsuris|noun|Trouble, aggravation, and woe.|The move gave the family nothing but tsuris.
trencherman|noun|A hearty, enthusiastic eater.|The trencherman went back for fourths.
toper|noun|A heavy, habitual drinker.|The old toper sat at the end of the bar.
threnody|noun|A song or poem of mourning.|The band closed with a threnody for their late drummer.
palinode|noun|A poem or statement retracting an earlier one.|His palinode took back every insult in the first post.
panegyric|noun|A formal speech or text of high praise.|The yearbook ran a panegyric to the retiring janitor.
epithalamium|noun|A song or poem celebrating a wedding.|Her sister read an epithalamium at the reception.
callithump|noun|A noisy, boisterous parade.|The callithump of pots and pans woke the block.
charivari|noun|A mock serenade with pots and pans for newlyweds.|Neighbors held a charivari outside the honeymoon cabin.
trumpery|noun|Showy but worthless stuff; nonsense.|The attic was full of trumpery from old parties.
eructation|noun|A belch, or the act of belching.|A loud eructation ended the formal dinner.
crapulence|noun|Sickness from too much eating or drinking.|Thanksgiving crapulence kept us on the couch.
quodlibet|noun|A fine point for debate; also, a musical medley.|The seminar spent an hour on a single quodlibet.
apothegm|noun|A short, pointed saying.|Grandma's favorite apothegm: ‘Measure twice.’
logogriph|noun|A word puzzle, such as a riddle built on anagrams.|The newspaper's logogriph stumped the whole family.
lipogram|noun|A text written without using a particular letter.|He wrote a lipogram that never used the letter E.
pangram|noun|A sentence that uses every letter of the alphabet.|‘The quick brown fox’ line is the best-known pangram.
contronym|noun|A word that can mean its own opposite.|‘Sanction’ is a contronym: it can allow or forbid.
retronym|noun|A new name for an old thing to tell it from a newer one.|‘Landline’ is a retronym born from cell phones.
aptronym|noun|A name that suits its owner's job.|A dentist named Dr. Toothman has an aptronym.
exonym|noun|A name outsiders use for a place instead of its own.|‘Germany’ is an exonym; locals say Deutschland.
hypocorism|noun|A pet name or affectionate nickname.|‘Bubba’ was a hypocorism that stuck for life.
cacoethes|noun|An irresistible urge to do something unwise.|He has a cacoethes for hitting reply-all.
ataraxia|noun|A calm state free of worry or distress.|Hammock time is my path to ataraxia.
eudaemonia|noun|Happiness that comes from living well.|For the philosopher, eudaemonia meant a life of virtue.
phronesis|noun|Practical wisdom in choosing how to act.|The coach showed phronesis in resting her star.
metanoia|noun|A fundamental change of heart or mind.|The trip sparked a metanoia about his career.
kairos|noun|The right or opportune moment.|She waited for the kairos to ask for a raise.
sophrosyne|noun|Moderation and self-control.|Two slices of cake showed little sophrosyne.
parrhesia|noun|Frank, fearless speech.|Her parrhesia at the town meeting won applause.
peripeteia|noun|A sudden reversal of fortune in a story.|The film's peripeteia came at the wedding.
prolepsis|noun|Answering an objection before anyone raises it.|Her essay used prolepsis to head off the obvious rebuttal.
apologue|noun|A short moral fable.|The teacher told an apologue about a greedy fox.
pentimento|noun|Traces of an earlier painting showing through a later one.|X-rays revealed a pentimento of a dog under the portrait.
sfumato|noun|Soft blending of tones without hard outlines.|The sfumato made her smile hard to read.
grisaille|noun|Painting done entirely in shades of gray.|The mural was a grisaille of the old harbor.
impasto|noun|Paint laid on so thick it stands up from the surface.|The impasto in the sunflowers catches the light.
craquelure|noun|A network of fine cracks on an old painting.|The craquelure showed the portrait was centuries old.
verdigris|noun|The green crust that forms on copper or brass.|Verdigris coated the old church bell.
foxing|noun|Brown spots that appear on old paper.|Foxing speckled the pages of the old atlas.
deckle|noun|The rough, untrimmed edge of handmade paper.|The invitations had a soft deckle edge.
colophon|noun|A publisher's emblem, or a note on how a book was made.|The colophon named the typeface and the paper.
fleuron|noun|A flower-shaped printer's ornament.|A small fleuron separated each chapter.
pilcrow|noun|The paragraph mark, ¶.|Turn on pilcrows to see the stray line breaks.
octothorpe|noun|The # symbol, also called the pound or hash sign.|Press the octothorpe to return to the main menu.
interrobang|noun|A punctuation mark combining a question and exclamation.|‘You ate all of it?!’ calls for an interrobang.
virgule|noun|A slash mark, as used in and/or.|Use a virgule between the two dates.
obelus|noun|The division sign, or a dagger mark in old texts.|The calculator's obelus key sits next to the times sign.
asterism|noun|A triangle of three printed stars; also, a star pattern.|The Big Dipper is an asterism, not a constellation.
tittle|noun|The dot over a lowercase i or j.|She drew hearts instead of tittles on her i's.
lemniscate|noun|The figure-eight infinity symbol.|He inked a tiny lemniscate on his wrist.
guillemet|noun|An angled quotation mark, like « or ».|French books use guillemets around dialogue.
gubbins|noun|Odds and ends; miscellaneous bits.|The drawer was full of cables and gubbins.
impedimenta|noun|Bulky equipment or baggage that slows you down.|We hauled our camping impedimenta up the hill.
oddment|noun|A leftover piece or scrap.|She quilted the blanket from fabric oddments.
tessera|noun|A small tile used in a mosaic.|One loose tessera spoiled the pattern.
spolia|noun|Old building stones reused in new construction.|The church wall was built partly from ancient spolia.
clerestory|noun|A high row of windows above eye level.|Light poured through the clerestory into the gym.
postern|noun|A small back or side gate.|We slipped out the postern behind the castle.
finial|noun|An ornament crowning a post, roof, or lamp.|The bed's brass finials gleamed.
newel|noun|The main post at the foot of a staircase.|He swung around the newel and raced upstairs.
gnomon|noun|The part of a sundial that casts the shadow.|The gnomon's shadow pointed to three o'clock.
clepsydra|noun|An ancient clock that measures time by dripping water.|The museum had a working clepsydra.
verdure|noun|Lush green vegetation.|Spring rain brought verdure back to the hills.
greensward|noun|An expanse of grassy turf.|Kids tumbled across the greensward.
spinney|noun|A small wood or thicket.|A fox lived in the spinney behind the school.
drumlin|noun|An oval hill shaped by a glacier.|The farm sat on top of a drumlin.
esker|noun|A long, winding ridge of gravel left by a glacier.|The trail followed the spine of an esker.
runnel|noun|A small stream or channel of water.|A runnel of melted snow ran down the street.
freshet|noun|A sudden rise in a stream from rain or melting snow.|The spring freshet flooded the footpath.
seiche|noun|A standing wave that sloshes back and forth in a lake.|A seiche made the lake level jump a foot.
tombolo|noun|A sandbar that connects an island to the mainland.|At low tide we walked the tombolo to the island.
spindrift|noun|Spray blown from the crests of waves.|Spindrift stung our faces on the ferry.
sough|noun|A soft moaning or sighing sound, as of wind.|The sough of the wind kept me awake.
murmuration|noun|A swirling flock of starlings in flight.|A murmuration of starlings filled the dusk sky.
clowder|noun|A group or gathering of cats.|A clowder of cats lived behind the diner.
stridulation|noun|The chirping made by insects rubbing body parts together.|Cricket stridulation filled the summer night.
viand|noun|An item of food, especially a choice one.|The table was spread with viands for the party.
mugwump|noun|A person who stays independent of party politics.|The mugwump refused to endorse either candidate.
blatherskite|noun|A person who talks a lot of nonsense.|The blatherskite on the radio never took a breath.
nudnik|noun|A pest; a nagging, annoying person.|The nudnik asked for the fifth time if we were there yet.
schnorrer|noun|A habitual sponger or freeloader.|The schnorrer showed up whenever pizza arrived.
bubkes|noun|Nothing at all; a worthless amount.|After all that work, we got bubkes.
florilegium|noun|An anthology of selected passages.|Her florilegium of favorite quotes filled a notebook.
chrestomathy|noun|A collection of passages for learning a language.|The Latin chrestomathy had short stories with notes.
omphaloskepsis|noun|Navel-gazing; self-absorbed contemplation.|Ten pages of omphaloskepsis passed for a diary.
apricate|verb|To bask in the sun.|The cat apricated on the windowsill all afternoon.
vilipend|verb|To belittle or speak of with contempt.|Don't vilipend the freshman for asking questions.
obnubilate|verb|To cloud over or obscure.|Jargon obnubilated the point of the memo.
obtund|verb|To blunt or dull, especially a sense or pain.|The ice obtunded the ache in my ankle.
cachinnate|verb|To laugh loudly and without restraint.|The crowd cachinnated at the comedian's last joke.
ululate|verb|To howl or wail, often in grief or celebration.|The fans ululated when the final whistle blew.
susurrate|verb|To whisper or rustle softly.|Leaves susurrated in the evening breeze.
perseverate|verb|To keep repeating a thought or action past its point.|He perseverated on one missed question for days.
divagate|verb|To stray or wander from the subject.|The lecture divagated into the professor's cats.
absquatulate|verb|To leave abruptly; to make off.|The cat absquatulated when the vacuum started.
fossick|verb|To rummage around in search of something.|I fossicked through the drawer for a pen.
rusticate|verb|To send to the countryside; to suspend from university.|He was rusticated for a term after the prank.
immure|verb|To shut someone in, as if behind walls.|She immured herself in the library during finals.
inspissate|verb|To thicken, as by boiling or evaporation.|Simmer the sauce until it inspissates.
macerate|verb|To soften by soaking in liquid.|Macerate the strawberries in sugar for an hour.
triturate|verb|To grind into a fine powder.|The pharmacist triturated the tablets for the syrup.
comminute|verb|To reduce to tiny particles; to pulverize.|The blender comminuted the ice in seconds.
deliquesce|verb|To melt away or dissolve.|The snowman deliquesced by noon.
evanesce|verb|To fade away like vapor.|Our lead evanesced in the final minute.
excogitate|verb|To think out carefully; to devise.|They excogitated a plan to surprise the coach.
ratiocinate|verb|To reason step by step.|The detective ratiocinated his way to the culprit.
lucubrate|verb|To study or write laboriously, especially at night.|She lucubrated over her thesis by lamplight.
objurgate|verb|To scold sharply.|The coach objurgated the team at halftime.
animadvert|verb|To comment critically on something.|The editor animadverted on our loose deadlines.
reprehend|verb|To reprimand or find fault with.|The judge reprehended the lawyer for his tone.
asperse|verb|To spread false or damaging charges against.|The ad aspersed her record without evidence.
calumniate|verb|To make false and damaging statements about.|The rumor calumniated a teacher who did nothing wrong.
obtest|verb|To beg earnestly; to call on as a witness.|He obtested his friends to keep the secret.
syncretize|verb|To blend different beliefs or practices into one.|The festival syncretized two cultures' traditions.
limn|verb|To depict or describe in painting or words.|Her essay limned the city at dawn.
maunder|verb|To talk or move aimlessly.|He maundered on about his fantasy team.
confabulate|verb|To chat; also, to fill memory gaps with invented details.|We confabulated over coffee for hours.
truckle|verb|To submit or yield obsequiously.|He refused to truckle to the team captain.
importune|verb|To pester with repeated requests.|The kids importuned us for ice cream all day.
mulct|verb|To extract money by fines or by fraud.|The scheme mulcted retirees of their savings.
euchre|verb|To cheat or outwit.|The salesman euchred us into the extended warranty.
chouse|verb|To cheat or swindle.|The street game choused tourists out of twenty dollars.
defalcate|verb|To misuse money held in trust.|The treasurer defalcated the club's dues.
peculate|verb|To embezzle public or entrusted money.|The official peculated funds meant for the library.
hypothecate|verb|To pledge something as security without giving it up.|They hypothecated the house to fund the bakery.
titivate|verb|To make small improvements to one's appearance.|She titivated in the mirror before the photo.
bedizen|verb|To dress or decorate gaudily.|They bedizened the float with tinsel and lights.
caparison|verb|To dress in rich decorative clothing.|The horses were caparisoned for the parade.
footle|verb|To waste time on trivial things.|We footled around until the movie started.
fribble|verb|To waste time frivolously.|He fribbled away the afternoon on his phone.
scarper|verb|To run away or leave in a hurry.|The kids scarpered when the window broke.
blench|verb|To flinch or shy away in fear.|She did not blench at the sight of the needle.
gawp|verb|To stare openly and stupidly.|Tourists gawped at the street performer.
lour|verb|To frown, scowl, or look threatening.|Storm clouds loured over the stadium.
harrumph|verb|To clear one's throat or grumble in disapproval.|Grandpa harrumphed at the price of coffee.
gurn|verb|To pull a grotesque face.|He gurned at the camera in every photo.
fleer|verb|To laugh or grin mockingly.|The bullies fleered at his new haircut.
expostulate|verb|To argue earnestly in protest.|She expostulated with the ref over the call.
perorate|verb|To speak at great length; to sum up a speech.|The senator perorated for an hour.
descant|verb|To talk at length on a subject.|He descanted on the history of the bicycle.
vaticinate|verb|To foretell or prophesy.|Pundits vaticinated a landslide that never came.
prink|verb|To dress up or primp fussily.|He prinked in front of the mirror for twenty minutes.
furbish|verb|To polish or restore to a fresh condition.|We furbished the old desk with new varnish.
kvell|verb|To beam with pride and pleasure.|Her parents kvelled through the whole graduation.
fress|verb|To eat greedily and with gusto.|We fressed our way through the buffet.
obsecrate|verb|To beseech or implore.|He obsecrated the teacher for an extension.
suborn|verb|To bribe or induce someone to do wrong.|The defendant tried to suborn a witness.
palter|verb|To talk or act insincerely; to haggle.|Don't palter with me; just give me the real price.
cadge|verb|To ask for or get something by begging.|He cadged a ride home from practice.
snaffle|verb|To take quickly for oneself.|She snaffled the last cookie before anyone noticed.
nobble|verb|To tamper with or influence improperly.|Someone tried to nobble the judges before the contest.
distrain|verb|To seize property to force payment of a debt.|The landlord distrained the tenant's furniture.
deracinate|verb|To uproot, or tear from one's native culture.|The move deracinated him from everything familiar.
rive|verb|To split or tear apart violently.|The lightning rived the old oak in two.
dissever|verb|To divide or separate.|The fence dissevered the two yards.
ramify|verb|To branch out; to spread into consequences.|The small rule change ramified across the league.
indurate|verb|To harden; to make callous.|Years of criticism indurated her to bad reviews.
gormandize|verb|To eat greedily and to excess.|We gormandized on pie at the fair.
fustigate|verb|To beat with a stick; to criticize harshly.|The review fustigated the film's script.
scarify|verb|To scratch the surface of; to criticize harshly.|We scarified the lawn before seeding it.
discommode|verb|To cause inconvenience to.|I hope the late change does not discommode you.
bumfuzzle|verb|To confuse or fluster.|The trick question bumfuzzled the whole class.
controvert|verb|To argue against or deny.|No one could controvert her data.
confute|verb|To prove wrong with argument or evidence.|One photo confuted his whole alibi.
asseverate|verb|To declare earnestly and solemnly.|He asseverated that he had never seen the dog.
educe|verb|To bring out or develop something latent.|Good questions educe better answers.
wassail|verb|To drink and make merry; to carol door to door.|Neighbors wassailed down the street on New Year's Eve.
roister|verb|To celebrate noisily and boisterously.|The fans roistered in the square till dawn.
curvet|verb|To leap or frisk about.|The pony curveted across the paddock.
lollop|verb|To move with clumsy, bounding strides.|The puppy lolloped across the lawn.
galumph|verb|To move in a clumsy, heavy, noisy way.|My brother galumphed down the stairs at six.
hirple|verb|To limp or hobble.|He hirpled off the field holding his knee.
pootle|verb|To move or travel in a leisurely way.|We pootled around town on our bikes.
crepitate|verb|To make a crackling sound.|The leaves crepitated under our boots.
whiffle|verb|To blow in gusts; also, to waver.|The wind whiffled the candle flames.
plash|verb|To dabble or splatter gently in water.|Ducks plashed in the shallow pond.
begrime|verb|To blacken with grime.|Soot begrimed the chimney sweep's face.
bespatter|verb|To spatter with liquid; also, to slander.|The bus bespattered us with puddle water.
yawp|verb|To utter a loud, harsh cry.|The gulls yawped over the boardwalk.
prate|verb|To talk at length in a foolish way.|He prated about his golf swing all dinner.
blether|verb|To talk long-windedly without much sense.|They blethered on the phone for two hours.
chunter|verb|To mutter or grumble under one's breath.|Dad chuntered about the traffic all the way home.
mither|verb|To pester or fuss.|Stop mithering me about the dishes.
chivvy|verb|To nag someone to do something; to hurry along.|She chivvied the kids out the door.
abash|verb|To make embarrassed or ashamed.|Her quiet reply abashed the heckler.
discountenance|verb|To disconcert; also, to show disapproval of.|The question discountenanced the confident speaker.
nonplus|verb|To puzzle so completely that one is at a loss.|The riddle nonplussed the whole table.
bruit|verb|To spread a rumor widely.|News of the breakup was bruited about the hallway.
clype|verb|To tell tales; to snitch.|Don't clype on your sister to the teacher.
noodge|verb|To pester or nag.|She noodged him until he called his grandmother.
skelp|verb|To slap or smack.|Grandpa skelped the table when he laughed.
thole|verb|To endure without complaint.|We tholed the long drive with snacks and podcasts.
scunner|verb|To feel or cause disgust.|The smell of the cafeteria scunnered him.
stravaig|verb|To wander aimlessly.|We stravaiged along the river all afternoon.
wamble|verb|To feel queasy; also, to move unsteadily.|My stomach wambled on the roller coaster.
spraddle|verb|To spread one's legs wide; to sprawl.|He spraddled across the couch.
wigwag|verb|To signal by waving flags or arms.|The lifeguard wigwagged us back toward shore.
dodder|verb|To tremble or totter, as from age.|The old dog doddered over to its bowl.
titubate|verb|To stagger or stumble.|He titubated off the spinning ride.
circumambulate|verb|To walk all the way around something.|We circumambulated the lake before breakfast.
gazump|verb|To raise a price after agreeing to a sale.|The seller gazumped us the day before closing.
`;

function parse(rows) {
  return rows.trim().split('\n').map((line) => {
    const [word, part, meaning, example] = line.split('|');
    return { word, part, meaning, example };
  });
}

export const FIRST_BANK = parse(firstRows);
export const RETIRED = retired;
export const WORDS = [...FIRST_BANK.filter(({ word }) => !retired.has(word)), ...parse(addedRows)];

// Each bank takes over at New York midnight on its date.
export const BANKS = [
  { from: '2026-09-23', words: FIRST_BANK },
  { from: '2026-10-22', words: WORDS },
];
