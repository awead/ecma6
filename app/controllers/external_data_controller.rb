class ExternalDataController < ApplicationController
  def index
    render json: { id: "1", title: "Canned Data", description: "Fresh, wholesome, canned data."}
  end
end
