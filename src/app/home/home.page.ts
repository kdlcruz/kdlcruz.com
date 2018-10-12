import { Component } from '@angular/core';

import CacheSkills from '../data/cache-skills'
import CiCdSkills from '../data/ci-cd-skills'
import ClientSkills from '../data/client-skills'
import DbSkills from '../data/db-skills'
import LocalSkills from '../data/local-skills'
import MicroSkills from '../data/micro-skills'
import Oskills from '../data/os-skills'
import Paymentkills from '../data/payment-skills'
import ServerSkills from '../data/server-skills'
import StylingSkills from '../data/styling-skills'
import TestSkills from '../data/test-skills'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public cacheSkills = CacheSkills
  public ciCdSkills = CiCdSkills
  public localSkills = LocalSkills
  public serverSkills = ServerSkills
  public clientSkills = ClientSkills
  public dbSkills = DbSkills
  public microSkills = MicroSkills
  public osSkills = Oskills
  public paymentSkills = Paymentkills
  public stylingSkills = StylingSkills
  public testSkills = TestSkills

  construct() {
  }

}
