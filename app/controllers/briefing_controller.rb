require 'vfr_utils'

class BriefingController < ApplicationController

  before_action :configure_vfr_utils

  def all
    metar = VfrUtils::METAR.get_one params[:icao_code]
    taf = VfrUtils::TAF.get_one params[:icao_code]
    notam = VfrUtils::NOTAM.get_one params[:icao_code]
    render json: { icao_code: params[:icao_code], metar: metar, taf: taf, notam: notam }
  end

  private

  def configure_vfr_utils
    VfrUtils.configure do |config|
      config.notam.cache_lifetime = 360000 # cache NOTAMS for 1200h
      config.metar.cache_lifetime = 360000 # cache METAR for 1200h
      config.taf.cache_lifetime = 360000 # cache TAF for 1200h
    end
  end

end
