export class LayerModel {
  private text: string = ""

  constructor(value: string) {
    this.text = value
  }

  public getText(): string {
    return this.text
  }
}
