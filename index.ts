import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda"
import { LayerModel } from "./layerSources/model/layer_model"
import * as dayjs from "dayjs"

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  console.log(event)
  const layerModel = new LayerModel("hoge")
  const messageBody: string = layerModel.getText()
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: messageBody,
        nowTime: dayjs()
      },
      null,
      2
    )
  }
}
