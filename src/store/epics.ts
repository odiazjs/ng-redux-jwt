import { Injectable } from '@angular/core'
import { LoginEpics } from './epics/login.epic'

@Injectable()
export class Epics {
  constructor(
    private loginEpics: LoginEpics
  ) {}

  public createEpics() {
    let epics: any[] = []
    epics = [
      ...this.loginEpics.createEpics(),
      ...epics
    ]
    return epics
  }
}
