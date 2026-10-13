/* Customize this CONFIG before publishing the invitation. */
const CONFIG = {
  partnerOne: "Nesti",
  partnerTwo: "Your Name",
  dateISO: "2026-11-26T09:00:00+07:00",
  dateLabel: "26 NOVEMBER 2026",
  eventDateShort: "OUR WEDDING · NOVEMBER 26",
  akadTime: "09.00 WIB",
  receptionTime: "11.00–14.00 WIB",
  venueName: "Add your venue name",
  venueAddress: "Add the full venue address",
  mapsUrl: "https://maps.google.com/",
  story: [["Chapter I","Every meaningful story begins with an ordinary moment."],["Chapter II","Little by little, two separate paths became one shared journey."],["Chapter III","Now, we'd love to celebrate the next chapter with you."]],
  bankName: "Add bank name", accountName: "Add account holder", accountNumber: "0000000000"
};
const $ = id => document.getElementById(id);
$("nameOne").textContent=CONFIG.partnerOne; $("nameTwo").textContent=CONFIG.partnerTwo; $("topDate").textContent=CONFIG.eventDateShort;
document.title=`${CONFIG.partnerOne} & ${CONFIG.partnerTwo} | Ever After Island`;
const backdrop=$("backdrop"), modalTitle=$("modalTitle"), modalEyebrow=$("modalEyebrow"), modalContent=$("modalContent"), toast=$("toast");let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2800)}
function esc(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function openPanel(key){const panels={
 details:{eyebrow:"THE DAY WE'VE BEEN WAITING FOR",title:"Wedding Details",html:`<p>We would be so happy to have you with us as we begin this new chapter.</p><ul class="detail-list"><li><span>Date</span><b>${CONFIG.dateLabel}</b></li><li><span>Akad</span><b>${esc(CONFIG.akadTime)}</b></li><li><span>Reception</span><b>${esc(CONFIG.receptionTime)}</b></li><li><span>Venue</span><b>${esc(CONFIG.venueName)}</b></li><li><span>Address</span><b>${esc(CONFIG.venueAddress)}</b></li></ul><a class="submit" style="display:inline-block;text-decoration:none" href="${esc(CONFIG.mapsUrl)}" target="_blank" rel="noreferrer">Open Google Maps ↗</a>`},
 story:{eyebrow:"A FEW CHAPTERS OF US",title:"Our Little Story",html:`<p>Some stories are made of grand gestures. Ours is made of the little things, the lessons, the laughter, and choosing each other along the way.</p><ul class="detail-list">${CONFIG.story.map(([h,b])=>`<li style="display:block"><b>${esc(h)}</b><br><span>${esc(b)}</span></li>`).join("")}</ul><p>We can't wait to begin this next chapter with the people we love.</p>`},
 rsvp:{eyebrow:"SAVE YOUR SEAT",title:"Will you join us?",html:`<p>This starter saves your response only in the current browser. It does not send it to the couple yet.</p><form id="rsvpForm"><div class="field"><label for="rsvpName">YOUR NAME</label><input id="rsvpName" name="name" required maxlength="80" placeholder="Full name"></div><div class="field"><label for="attendance">WILL YOU ATTEND?</label><select id="attendance" name="attendance" required><option value="">Choose one</option><option value="yes">Joyfully accepts</option><option value="no">Regretfully declines</option></select></div><div class="field"><label for="guests">NUMBER OF GUESTS (INCLUDING YOU)</label><select id="guests" name="guests"><option>1</option><option>2</option><option>3</option><option>4</option></select></div><button class="submit" type="submit">Save RSVP</button></form>`},
 guestbook:{eyebrow:"A NOTE FOR OUR NEXT CHAPTER",title:"Leave a little love",html:`<p>Your kind words will mean a lot to us. Add a message to this demo guestbook.</p><form id="guestForm"><div class="field"><label for="guestName">YOUR NAME</label><input id="guestName" name="name" required maxlength="80" placeholder="Your name"></div><div class="field"><label for="guestMessage">YOUR WISH</label><textarea id="guestMessage" name="message" required maxlength="500" placeholder="Write a little wish..."></textarea></div><button class="submit" type="submit">Leave your note</button></form><div class="notes" id="noteList"></div>`},
 gift:{eyebrow:"A KIND THOUGHT",title:"Digital Gift",html:`<p>Your presence is already a lovely gift. For anyone who has asked, we've included a placeholder for digital gifts below.</p><ul class="detail-list"><li><span>Bank</span><b>${esc(CONFIG.bankName)}</b></li><li><span>Account name</span><b>${esc(CONFIG.accountName)}</b></li><li><span>Account number</span><b>${esc(CONFIG.accountNumber)}</b></li></ul><div class="copy-row"><input id="accountCopy" readonly value="${esc(CONFIG.accountNumber)}"><button id="copyAccount" type="button">Copy</button></div><p style="font-size:10px">Replace sample details in script.js before sharing.</p>`}
};const p=panels[key];if(!p)return;modalEyebrow.textContent=p.eyebrow;modalTitle.textContent=p.title;modalContent.innerHTML=p.html;backdrop.hidden=false;document.body.style.overflow="hidden";$("close").focus();
 if(key==="rsvp")$("rsvpForm").addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));const all=JSON.parse(localStorage.getItem("eai-rsvp-demo")||"[]");all.push({...data,savedAt:new Date().toISOString()});localStorage.setItem("eai-rsvp-demo",JSON.stringify(all));closePanel();showToast("Demo RSVP saved on this device only. Connect a backend for shared responses.")});
 if(key==="guestbook"){renderNotes();$("guestForm").addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));const notes=JSON.parse(localStorage.getItem("eai-notes-demo")||"[]");notes.unshift({...data,savedAt:new Date().toISOString()});localStorage.setItem("eai-notes-demo",JSON.stringify(notes.slice(0,30)));renderNotes();e.currentTarget.reset();showToast("Your demo note was added on this device.")})}
 if(key==="gift")$("copyAccount").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(CONFIG.accountNumber);showToast("Account number copied.")}catch{$("accountCopy").select();document.execCommand("copy");showToast("Account number selected for copying.")}})
}
function renderNotes(){const list=$("noteList");if(!list)return;const notes=JSON.parse(localStorage.getItem("eai-notes-demo")||"[]");list.innerHTML=notes.length?notes.map(n=>`<article class="guest-note"><strong>${esc(n.name)}</strong><p>${esc(n.message)}</p></article>`).join(""):`<p>No notes yet. Be the first to leave one.</p>`}
function closePanel(){backdrop.hidden=true;document.body.style.overflow=""}
document.querySelectorAll("[data-booth]").forEach(el=>el.addEventListener("click",()=>openPanel(el.dataset.booth)));
$("close").addEventListener("click",closePanel);backdrop.addEventListener("click",e=>{if(e.target===backdrop)closePanel()});document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!backdrop.hidden)closePanel()});$("enterBtn").addEventListener("click",()=>$("explore").scrollIntoView({behavior:"smooth"}));
function countdown(){const diff=new Date(CONFIG.dateISO).getTime()-Date.now();if(diff<=0){["days","hours","minutes","seconds"].forEach(id=>$(id).textContent="00");return}$("days").textContent=String(Math.floor(diff/86400000)).padStart(2,"0");$("hours").textContent=String(Math.floor(diff%86400000/3600000)).padStart(2,"0");$("minutes").textContent=String(Math.floor(diff%3600000/60000)).padStart(2,"0");$("seconds").textContent=String(Math.floor(diff%60000/1000)).padStart(2,"0")}
countdown();setInterval(countdown,1000);$("soundToggle").addEventListener("click",()=>showToast("Sound is not enabled in this starter version."));
