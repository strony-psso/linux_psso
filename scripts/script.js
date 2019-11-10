const input = document.getElementById("input-field");

input.addEventListener("keyup", (e)=>{
    if(e.keyCode === 13) {
        event.preventDefault();

        value = input.value;

        switch(value) {
            case 'shutdown now':
                window.close();
                break;
            case 'clear':
                $(".appended").remove();
                break;
            case 'help':
                    $("#block").append('<div class="appended" id="help"><div class="line">root@desktop:<span class="tylda">~</span><span class="dolar">$</span><span class="command">&nbsp;help</span></div><p>GNU bash, wersja 5.0.3 - release (x86_64-pc-linux-gnu)</p> <p>Zobacz polecenia powłoki przy pomocy polecenia help.</p> <br> <p>clear - polecenie czyszczące ekran.</p> <p>shutdown now - wyłącza system</p> <p>basic_info - podstawowe informacje nt. systemu GNU/Linux.</p> <p>tux - informacje o maskotce linuxa</p><p>history - historia projektu</p><p>usage - zastosowanie linuxa</p><p>interface - interfejsy, w jakie może być wyposarzony GNU/Linux<p>cat /usr/share/doc/*/copyright - prawa autorskie </div>');
                    $('html, body').scrollTop($(document).height());
                    break;
            case 'basic_info':
                    $("#block").append('<div class="appended" id="basic_info"> <div class="line">root@desktop:<span class="tylda">~</span><span class="dolar">$</span><span class="command">&nbsp;basic_info</span></div> <p>Producent - społeczność</p> <p>Architektura - IA-32, MIPS, x86-64, SPARC, DEC Alpha, Itanium, PowerPC, ARM, m68k, PA-RISC, s390, SuperH, M32R, RISC-V i inne</p> <p>Pierwsze wydanie - wrzesień 1991</p> <p>Najnowszy kernel - 5.2.9</p> <p>Rodzaj jądra - monolityczne</p> <p>Środowiska graficzne - KDE, GNOME, Cinnamon, MATE, LXQt, Xfce, LXDE, Unity, Deepin desktop environment i inne</p> <p>Licencja - 	różne, jak na przykład GNU General Public License, BSDL, Apache License, X11 i inne</p> <p>Typ pakietów - RPM, deb, TGZ</p> </div>');
                    $('html, body').scrollTop($(document).height());
                break;
            case 'tux':
                    $("#block").append('<div class="appended" id="tux"> <div class="line">root@desktop:<span class="tylda">~</span><span class="dolar">$</span><span class="command">&nbsp;tux</span></div> <img src="images/tux.png"> <p>Tux – maskotka Linuksa, funkcjonująca jako oficjalne logo. Przedstawia ono uśmiechającego się pingwina.</p> <p>Nazwa pochodzi najprawdopodobniej od słów Torvald\'s Unix (Unix Torvaldsa), często jest wyprowadzana również od angielskiej nazwy smokingu (tuxedo), ponieważ pingwiny wyglądają, jakby nosiły smoking</p> <p>Rysunek Tuksa stworzył w 1996 r. Larry Ewing, korzystając z bezpłatnego programu graficznego GIMP, i udostępnił go pod następującym warunkiem:<br> Permission to use and/or modify this image is granted provided you acknowledge me lewing@isc.tamu.edu and The GIMP if someone asks. <br></p> <p>Tux stał się symbolem społeczności użytkowników Linuksa i zwolenników wolnego oprogramowania. Jedna z brytyjskich grup użytkowników Linuksa zaadoptowała kilka pingwinów w zoo w Bristolu.</p> </div>');
                    $('html, body').scrollTop($(document).height());
                    break;
                case 'history':
                    $("#block").append('<div class="appended" id="usage"> <div class="line">root@desktop:<span class="tylda">~</span><span class="dolar">$</span><span class="command">&nbsp;history</span></div><p>Historia Linuksa rozpoczęła się w 1991 roku, kiedy to fiński programista, Linus Torvalds poinformował o hobbystycznym tworzeniu przez siebie niedużego, wolnego systemu operacyjnego, przeznaczonego dla procesorów z rodzin i386 oraz i486.</p><p>Linus stworzył jednak tylko jądro, pełny system operacyjny potrzebował jeszcze powłoki systemowej, kompilatora, bibliotek itp. W roli większości z tych narzędzi użyto oprogramowania GNU, co jednak w przypadku niektórych komponentów systemu wymagało poważnych zmian, niekiedy finansowanych przez Projekt GNU, niekiedy dokonanych już wcześniej przez Linusa Torvaldsa.</p><p>Dużo pracy wymagało także zintegrowanie systemu do postaci dystrybucji, które umożliwiały zainstalowanie go w stosunkowo prosty sposób. Jednymi z pierwszych były opublikowany 16 lipca 1993 Slackware Linux czy założony miesiąc później Debian, nazywający siebie GNU/Linux.</p> </div>');
                        $('html, body').scrollTop($(document).height());
                    break;
                case 'usage':
                    $("#block").append('<div class="appended" id="usage"> <div class="line">root@desktop:<span class="tylda">~</span><span class="dolar">$</span><span class="command">&nbsp;usage</span></div><p>Linux stosowany jest jako podstawowy system operacyjny serwerów (w tym WWW, FTP, pocztowych, baz danych), zapór sieciowych, routerów, a także w systemach osadzonych oraz w niektórych odtwarzaczach DVD i tunerach DVB.</p><p>Ze względu na powstanie i rozwój dystrybucji o łatwej instalacji i dużych zasobach oprogramowania, Linux znajduje również zastosowanie na rynku komputerów biurowych i domowych. Rządy kilku państw europejskich prowadzą wdrożenia Linuksa na komputerach administracji państwowej. Ponadto ze względu na bezpieczeństwo, stabilność, możliwość audytu i łatwość modyfikacji kodu źródłowego, z Linuksa korzystają agencje wywiadowcze, kontrwywiad i wojsko.</p><p>Linux wykorzystywany jest przez niektóre banki i instytucje finansowe. Przykładowo, system notowań Wall Street oparty jest na tym systemie operacyjnym, jak i również Londyńska Giełda.</p> </div>');
                    $('html, body').scrollTop($(document).height());
                    break;
                case 'interface':
                    $("#block").append('<div class="appended" id="interface"> <div class="line">root@desktop:<span class="tylda">~</span><span class="dolar">$</span><span class="command">&nbsp;interface</span></div><p>Linux zawiera interfejs wiersza poleceń (CLI) jako część funkcji przejętych z Uniksa. Dystrybucje wyspecjalizowane na serwery lub administrację mogą używać wiersza poleceń jako jedynego interfejsu. Nieobecność interfejsu graficznego (GUI) pozwala na zminimalizowanie wykorzystywanych zasobów systemowych. Maszyny z Linuksem mogą równie dobrze działać bez podłączonego monitora. Aby administrator mógł się na nich zalogować, potrzeba albo zdalnego X11, albo terminal musi być uruchomiony z protokołu takiego, jak SSH lub telnet. W sieciach lokalnych zdalne używanie X11 jest przeważnie akceptowalne, ale na dłuższe dystanse operacje te mogą zajmować za dużo czasu. Innym sposobem na zarządzanie systemem bez urządzeń HID (Human Interface Device) i sieci jest terminal podłączany przez port szeregowy – głównie służący do debugowania i diagnostyki urządzeń wbudowanych.</p><p>Graficzny interfejs użytkownika GUI nie jest w Linuksie integralną częścią systemu operacyjnego, lecz dodatkowym zbiorem programów. W zależności od stopnia zaawansowania i integracji użytych rozwiązań, dostępne GUI możemy podzielić na małe menedżery okien oraz duże środowiska graficzne.</p> </div>');
                    $('html, body').scrollTop($(document).height());
                    break;
                case 'cat /usr/share/doc/*/copyright':
                    $("#block").append('<div class="appended" id="copyright"> <div class="line">root@desktop:<span class="tylda">~</span><span class="dolar">$</span><span class="command">&nbsp;cat /usr/share/doc/*/copyright</span></div><p>Wykonał Paweł Sowa klasa III i &copy; 2019r.</div>');
                    $('html, body').scrollTop($(document).height());
                    break;
                case 'panic!':
                    $(".appended").remove();
                    $(".line").remove();
                    $("#block").append('<span style="color: #fff"><p>run-init: /etc/init: Permition denied</p> <p>run-init: /etc/init: No such file or directory</p> <p>/bin.sh: 0: Can\'t open splash</p> <p>[   4.119452] Kernel panic - not syncing: Attempted to kill init! exitcode=0x00007f00</p> <p>[    4.119452]</p> <p>[    4.119452] CPU: 5 PID: 1 Comm: sh Not tainted 3.13.0-106-generic #153-Ubuntu</p> <p>[    4.119452] Hardware name: To be filled by O.E.M. To be filled by O.E.M./M5A99FX PRO R2.0, BIOS 2301 01/06/2014</p> <p>[    4.119452]   0000000000000000 ffff88042853de48 ffffffff81725j2s ffffffffff81a51</p> <p>[    4.119452]   0000sa0023000000 ffff88122853de48 ff55ffff81725j2s ffff432ffff81a51</p> <p>[    4.119452]   0000000000000000 ffff88042853de48 ffffffff81725j2s ffffffffff81a51</p> <p>[    4.119452] Call Trace:</p> <p>[    4.119452] [ffffffff8213934-0] dump_stack+0x64/0x82</p> <p>[    4.119452] Kernel Offset: 0x0 from 0xffffffff8100000 (relocation range: 0xffffffff80000000-0xffffffff9ffffffff</p></span>');
                    break;
                default:
                    $("#block").append('<div class="appended" id="copyright"> <div class="line">root@desktop:<span class="tylda">~</span><span class="dolar">$</span><span class="command">&nbsp;' + input.value + '</span></div><p>bash: ' + input.value +': Nie znaleziono polecenia</div>');
                    $('html, body').scrollTop($(document).height());

        }
        input.value = "";
    }
});