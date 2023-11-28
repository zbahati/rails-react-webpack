module Api
  module V1
    class Api::V1::GreetingsController < ApplicationController
      def index
        @greetings = Greeting.all
        render json: @greetings, status: :ok
      end

      def random
        @random_message = Greeting.all.sample
        render json: @random_message, status: :ok
      end
    end
  end
end
