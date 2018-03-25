class Api::UserController < ApplicationController
  
  def update
		user = User.find(params[:id])
		user.name = params[:name]
		user.email = params[:email]
	
		begin
      
			if user.save
				render json: user
			else
				handle_error(user)
			end
		rescue => e
			render json: { errors: e }, status: 422
		end
	end

  
end
