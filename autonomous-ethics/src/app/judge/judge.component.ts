import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session.service";
import {Scenario} from "../../models/scenario";

@Component({
  selector: 'app-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.scss']
})
export class JudgeComponent implements OnInit {

  public scenario: Scenario | null = null;

  public current_choice: number = 1;
  public readonly number_of_choices: number = 10;

  choice1_desc: String = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget erat finibus, fringilla purus sed, gravida mi. Vivamus rhoncus turpis vel urna sodales vulputate. Etiam dolor elit, tristique non vestibulum sed, tincidunt et orci. Nulla et dui ac justo mollis scelerisque. Vestibulum a augue in est rutrum luctus. Sed volutpat in mauris sed sodales. Proin vel ipsum risus. Nunc mollis convallis ipsum, vitae ornare est suscipit vel. Phasellus mattis ut velit id viverra.\n" +
    "\n" +
    "Cras fringilla aliquet dolor non imperdiet. Nulla facilisi. Suspendisse blandit erat a risus feugiat feugiat. Proin ex diam, viverra dictum dui id, egestas molestie ligula. Nunc congue eu dui eget sagittis. Vivamus a feugiat arcu. Quisque viverra, ligula vitae vehicula eleifend, sapien dui efficitur justo, nec vehicula urna tortor quis quam. Phasellus nec risus quis magna elementum ullamcorper eu sed eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Aliquam id iaculis magna. Pellentesque nulla nunc, pellentesque et viverra pellentesque, luctus eget ex. Suspendisse suscipit id felis auctor vehicula. Vestibulum sodales, libero at tempus hendrerit, felis justo vestibulum est, posuere auctor nisi ipsum ac nisl. Donec interdum volutpat elit vel euismod.\n" +
    "\n" +
    "Proin sem erat, finibus sed eros quis, tempor maximus tellus. Vivamus imperdiet, quam at facilisis egestas, arcu leo vestibulum justo, vulputate ullamcorper nisl turpis a elit. Pellentesque dignissim tincidunt urna, sit amet cursus odio blandit vel. Pellentesque tincidunt ipsum eros, sed tincidunt metus malesuada in. Aenean id blandit tortor. Nulla sodales, tellus non ultrices feugiat, sapien purus pulvinar nunc, sit amet auctor nulla orci condimentum elit. Donec hendrerit purus nec urna egestas semper. Integer eget enim in magna vehicula pulvinar nec eget massa. Duis lobortis dictum nibh, id facilisis neque sagittis dapibus. Vivamus hendrerit finibus ornare. Nunc luctus bibendum leo, id cursus augue suscipit non. Nulla pharetra non magna ut ornare. Cras magna nunc, condimentum et malesuada quis, congue et purus. Suspendisse et aliquet nunc, vel interdum tortor.\n" +
    "\n" +
    "Suspendisse varius lectus elit, quis mollis quam convallis nec. Suspendisse libero nisi, ullamcorper vel iaculis vel, bibendum ut odio. Praesent scelerisque lorem quis leo vehicula, euismod vulputate nunc consequat. Suspendisse tempus commodo risus id pretium. Donec rhoncus gravida ex at tincidunt. Etiam ut cursus enim. Phasellus sed augue a lectus suscipit maximus id eu mauris. Proin ultrices blandit nisi, at congue augue cursus a. In viverra pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non facilisis eros. Aenean vitae sollicitudin risus, at lobortis mauris. Curabitur a lectus pellentesque, vestibulum diam nec, tempus sapien. Donec ultrices nisl erat, sit amet condimentum nibh placerat ac. "
  choice2_desc: String = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget erat finibus, fringilla purus sed, gravida mi. Vivamus rhoncus turpis vel urna sodales vulputate. Etiam dolor elit, tristique non vestibulum sed, tincidunt et orci. Nulla et dui ac justo mollis scelerisque. Vestibulum a augue in est rutrum luctus. Sed volutpat in mauris sed sodales. Proin vel ipsum risus. Nunc mollis convallis ipsum, vitae ornare est suscipit vel. Phasellus mattis ut velit id viverra.\n" +
    "\n" +
    "Cras fringilla aliquet dolor non imperdiet. Nulla facilisi. Suspendisse blandit erat a risus feugiat feugiat. Proin ex diam, viverra dictum dui id, egestas molestie ligula. Nunc congue eu dui eget sagittis. Vivamus a feugiat arcu. Quisque viverra, ligula vitae vehicula eleifend, sapien dui efficitur justo, nec vehicula urna tortor quis quam. Phasellus nec risus quis magna elementum ullamcorper eu sed eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Aliquam id iaculis magna. Pellentesque nulla nunc, pellentesque et viverra pellentesque, luctus eget ex. Suspendisse suscipit id felis auctor vehicula. Vestibulum sodales, libero at tempus hendrerit, felis justo vestibulum est, posuere auctor nisi ipsum ac nisl. Donec interdum volutpat elit vel euismod.\n" +
    "\n" +
    "Proin sem erat, finibus sed eros quis, tempor maximus tellus. Vivamus imperdiet, quam at facilisis egestas, arcu leo vestibulum justo, vulputate ullamcorper nisl turpis a elit. Pellentesque dignissim tincidunt urna, sit amet cursus odio blandit vel. Pellentesque tincidunt ipsum eros, sed tincidunt metus malesuada in. Aenean id blandit tortor. Nulla sodales, tellus non ultrices feugiat, sapien purus pulvinar nunc, sit amet auctor nulla orci condimentum elit. Donec hendrerit purus nec urna egestas semper. Integer eget enim in magna vehicula pulvinar nec eget massa. Duis lobortis dictum nibh, id facilisis neque sagittis dapibus. Vivamus hendrerit finibus ornare. Nunc luctus bibendum leo, id cursus augue suscipit non. Nulla pharetra non magna ut ornare. Cras magna nunc, condimentum et malesuada quis, congue et purus. Suspendisse et aliquet nunc, vel interdum tortor.\n" +
    "\n" +
    "Suspendisse varius lectus elit, quis mollis quam convallis nec. Suspendisse libero nisi, ullamcorper vel iaculis vel, bibendum ut odio. Praesent scelerisque lorem quis leo vehicula, euismod vulputate nunc consequat. Suspendisse tempus commodo risus id pretium. Donec rhoncus gravida ex at tincidunt. Etiam ut cursus enim. Phasellus sed augue a lectus suscipit maximus id eu mauris. Proin ultrices blandit nisi, at congue augue cursus a. In viverra pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non facilisis eros. Aenean vitae sollicitudin risus, at lobortis mauris. Curabitur a lectus pellentesque, vestibulum diam nec, tempus sapien. Donec ultrices nisl erat, sit amet condimentum nibh placerat ac. "

  constructor(private sessionStorage: SessionService) { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView({behavior: 'smooth'});
  }

  public select(which: boolean): void {
    this.sessionStorage.pushChoice(this.current_choice, which);
  }

}
