package com.example.Service;

import com.example.model.Restaurant;
import com.example.Repository.RestaurantRepository;
import com.example.exception.RestaurantNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;

    @Autowired
    public RestaurantService(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    public Restaurant getRestaurantById(int id) {
        return restaurantRepository.findById(id)
                .orElseThrow(() -> new RestaurantNotFoundException("Restaurant not found with ID: " + id));
    }

    public Restaurant createRestaurant(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    public Restaurant updateRestaurant(int id, Restaurant updatedRestaurant) {
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(id);
        if (optionalRestaurant.isPresent()) {
            Restaurant existingRestaurant = optionalRestaurant.get();
            existingRestaurant.setFoodname(updatedRestaurant.getFoodname());
            existingRestaurant.setCost(updatedRestaurant.getCost());
            existingRestaurant.setGst(updatedRestaurant.getGst());
            existingRestaurant.setTotal(updatedRestaurant.getTotal());
            return restaurantRepository.save(existingRestaurant);
        } else {
            throw new RestaurantNotFoundException("Restaurant not found with ID: " + id);
        }
    }

    public void deleteRestaurant(int id) {
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(id);
        if (optionalRestaurant.isPresent()) {
            Restaurant restaurant = optionalRestaurant.get();
            restaurantRepository.delete(restaurant);
        } else {
            throw new RestaurantNotFoundException("Restaurant not found with ID: " + id);
        }
    }
}
